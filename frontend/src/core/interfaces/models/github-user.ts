export interface GitHubUser {
  readonly id: number | null;
  readonly username: string;
  readonly name: string;
  readonly description: string;
  readonly avatar: string;
  readonly nodeId: string;
  readonly location: string | null;
  readonly twitterProfile: string | null;
  readonly type: string | null;
  readonly email: string | null;
  readonly publicRepositories: number | null;
  readonly privateRepositories: number | null;
  readonly publicGists: number | null;
  readonly privateGists: number | null;
  readonly blog: string | null;
  readonly company: string | null;
  readonly following: number | null;
  readonly followers: number | null;
  readonly collaborators: number | null;
  readonly memberSince: Date;
}
