import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { GitHubCommitDto } from '../dto';
import { HttpService } from '@nestjs/axios';
import { NotFoundException } from '@nestjs/common';
import {
  catchError,
  firstValueFrom,
  from,
  map,
  switchMap,
  takeLast,
  toArray,
} from 'rxjs';
import { ConfigService } from '@nestjs/config';
import { GitHubCommit } from '../interfaces';
import { GitHubUserDto } from '../dto/github-user.dto';

@ApiTags('github')
@Controller('github')
export class GitHubController {
  constructor(
    private readonly _httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  @Get(':user/user-info')
  getUserInfo(@Param('user') user: string): Promise<GitHubUserDto> {
    return firstValueFrom(
      this._httpService.get(`/users/${user}`).pipe(
        map((res) => GitHubUserDto.create(res.data)),
        catchError(() => {
          throw new NotFoundException('User not found');
        }),
      ),
    );
  }

  @Get(':user/repositories/:repository/commits')
  getCommitsFromRepository(
    @Param('user') user: string,
    @Param('repository') repository: string,
    @Query('limit') limit?: number,
  ): Promise<GitHubCommitDto[]> {
    return firstValueFrom(
      this._httpService
        .get(`/repos/${user}/${repository}/commits?per_page=100`)
        .pipe(
          map((res) => res.data),
          switchMap((data) => from(data)),
          takeLast(typeof limit === 'number' && limit > 0 ? limit : 100),
          map((data: GitHubCommit) => GitHubCommitDto.create(data)),
          toArray(),
          catchError(() => {
            throw new NotFoundException('Repository or User not found.');
          }),
        ),
    );
  }
}
