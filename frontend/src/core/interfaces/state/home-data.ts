import { GitHubCommit, GitHubRepository, GitHubUser } from "../models";

export interface HomeData {
  userInfo: GitHubUser;
  repositories: GitHubRepository[];
  commits: GitHubCommit[];
}
