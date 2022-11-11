import { GitHubRepository } from "../../core/interfaces/models";

interface GitHubRepositoryCardProps {
  repository: GitHubRepository;
}

export const GitHubRepositoryCard = ({
  repository,
}: GitHubRepositoryCardProps) => {
  return (
    <div className="relative block overflow-hidden  rounded-lg border border-double border-gray-200 border-opacity-1 p-8">
      <span className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600"></span>

      <div className="justify-between sm:flex">
        <div>
          <h3 className="text-lg font-bold text-gray-900 font-mono ">
            {repository?.name ?? ""}
          </h3>

          <p className="mt-1 text-xs font-medium text-gray-600">
            {repository?.description ?? ""}
          </p>
        </div>
      </div>

      <dl className="mt-6 flex justify-between">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">
            {repository?.visibility ?? ""}
          </dt>
          <dd className="text-xs text-gray-500">Visibility</dd>
        </div>
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600">
            {new Date(repository.createdAt).toDateString() ?? ""}
          </dt>
          <dd className="text-xs text-gray-500">Created At</dd>
        </div>
      </dl>
    </div>
  );
};
