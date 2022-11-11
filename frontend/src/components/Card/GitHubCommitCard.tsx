import { GitHubCommit } from "../../core/interfaces/models";

interface GitHubCommitCardProps {
  commit: GitHubCommit;
}

export const GitHubCommitCard = ({ commit }: GitHubCommitCardProps) => {
  return (
    <div className="relative block overflow-hidden  rounded-lg border border-double border-gray-200 border-opacity-1 p-8">
      <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></span>

      <div className="justify-between sm:flex">
        <div>
          <h3 className="text-lg font-bold text-gray-900 font-mono ">
            {commit.message}
          </h3>

          <p className="mt-1 text-xs font-medium text-gray-600">
            By {commit.committedBy.name}
          </p>
        </div>
      </div>

      <dl className="mt-6 flex">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">
            {new Date(commit.createdAt).toDateString()}
          </dt>
          <dd className="text-xs text-gray-500">Committed on</dd>
        </div>
      </dl>
    </div>
  );
};
