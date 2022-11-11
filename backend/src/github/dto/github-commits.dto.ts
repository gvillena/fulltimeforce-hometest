import { GitHubCommit } from '../interfaces';
import { ApiProperty } from '@nestjs/swagger';

export class GitHubCommitDto {
  @ApiProperty({ description: 'Unique identifier for this commit.' })
  readonly sha: string;

  @ApiProperty({ description: 'Id of the associated node.' })
  readonly nodeId: string;

  @ApiProperty({ description: 'Name and avatar of the commiter.' })
  readonly committedBy: {
    name: string;
    avatar: string;
  };

  @ApiProperty({
    description: 'Commit message.',
    example: 'feat: add very cool feature',
  })
  readonly message: string;

  @ApiProperty({ description: 'Commit date' })
  readonly createdAt: Date;

  private constructor(commit: GitHubCommit) {
    this.sha = commit?.sha;
    this.committedBy = {
      name: commit?.commit?.author?.name,
      avatar: commit?.author?.avatar_url,
    };
    this.createdAt = new Date(commit?.commit?.author?.date);
    this.nodeId = commit?.node_id;

    this.message = commit?.commit?.message?.replace?.('Empty', '');
  }

  public static create(commit: GitHubCommit) {
    return new GitHubCommitDto(commit);
  }
}
