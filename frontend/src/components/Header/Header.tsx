import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GitHubRequest } from "../../core/api/requests";
import { GitHubUser } from "../../core/interfaces/models";
import { HeaderData } from "./HeaderData";

export const Header = () => {
  const [user, setUser] = useState<GitHubUser>();

  useEffect(() => {
    // const controller = new AbortController();

    const fetchData = async () =>
      setUser(await GitHubRequest.getUserInfo("gvillena"));

    fetchData();

    // return () => controller.abort();
  }, []);

  const pathname = usePathname();

  return (
    <div>
      <div className="bg-gray-800 pt-8 pb-8 relative z-10">
        <div className="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
          <HeaderData userData={user} />
        </div>
      </div>
      {/* {pathname !== "/" && user && (
        <div className="bg-gray-800 pt-8 pb-16 relative z-10">
          <div className="container px-6 mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between">
            <HeaderData userData={user} />
          </div>
        </div>
      )} */}
    </div>
  );
};
