import { GithubService } from './../services';
import { RequestModule } from '../../common/modules';
import { forwardRef, Module } from '@nestjs/common';
import { GitHubController } from '../controllers';

@Module({
  imports: [forwardRef(() => RequestModule)],
  providers: [GithubService],
  controllers: [GitHubController],
})
export class GitHubModule {}
