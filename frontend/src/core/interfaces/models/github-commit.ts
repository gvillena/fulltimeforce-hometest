export interface GitHubCommit {
  readonly sha: string;
  readonly nodeId: string;
  readonly committedBy: {
    name: string;
    avatar: string;
  };
  readonly message: string;
  readonly createdAt: Date;
}
