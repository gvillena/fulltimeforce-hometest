export interface GitHubRepository {
  readonly id: number;
  readonly nodeId: string;
  readonly name: string;
  readonly owner: {
    name: string;
    avatar: string;
  };
  readonly defaultBranch: string;
  readonly url: string;
  readonly description: string;
  readonly primaryLanguage: string;
  readonly visibility: string;
  readonly createdAt: string;
}
