import { GitHubCommit } from "../../interfaces/models";
import { http } from "../http";
import { GenericAbortSignal } from "axios";
import { GitHubUser } from "../../interfaces/models";
import { parseRequestError } from "../../utils";

export class GitHubRequest {
  private static limit = "?limit=5";

  static async getUserInfo(
    user: string,
    signal?: GenericAbortSignal,
    lastFive = false
  ): Promise<GitHubUser> {
    try {
      const { data } = await http.get(
        `/${user}/user-info${lastFive ? this.limit : ""}`
      );

      return data;
    } catch (error) {
      throw parseRequestError(error);
    }
  }
  

  static async getCommitsFromRepository(
    user: string,
    repository: string,
    signal?: GenericAbortSignal,
    lastFive = false
  ): Promise<GitHubCommit[]> {
    try {
      const { data } = await http.get(
        `/${user}/repositories/${repository}/commits${
          lastFive ? this.limit : ""
        }`
      );

      return data;
    } catch (error) {
      throw parseRequestError(error);
    }
  }
}
