export interface GitHubBranch {
  readonly name: string;
  readonly protected: boolean;
  readonly commit: string;
}
