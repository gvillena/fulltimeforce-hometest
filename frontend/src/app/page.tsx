import Link from "next/link";
import { useEffect } from "react";
import { GitHubCommitCard, GitHubUserCard } from "../components";
import { GitHubRequest } from "../core/api/requests";

const Page = async () => {
  const userInfo = await GitHubRequest.getUserInfo("gvillena");
  const commits = await GitHubRequest.getCommitsFromRepository(
    "gvillena",
    "fulltimeforce-hometest"
  );

  return (
    <div className="p-6 mt-10">
      <div>
        <h2 className="font-bold text-2xl mb-7">
          Recent Commits from fulltimeforce-hometest
        </h2>
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {commits.map((commit) => (
            <GitHubCommitCard key={commit.nodeId} commit={commit} />
          ))}
        </div>
        <div className="flex justify-center mt-7">
          <Link
            className="group relative inline-block text-sm font-medium text-purple-600 focus:outline-none focus:ring active:text-purple-500"
            href="/commits"
          >
            <span className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-purple-600 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

            <span className="relative block border border-current bg-white px-8 py-3">
              View More
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
