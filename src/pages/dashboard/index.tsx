import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import Layout from "../../components/Layout";
// import Link from "next/link";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Dashboard: NextPageWithLayout = () => {
  return (
    <div className="m-3 p-3 md:flex-row w-full flex-col">
      {/* to search */}
      <div className="m-2 p-2 w-72 xl:80 border border-gray-800 text-sm">
        <div className="my-1">
          <p className="text-gray-700 my-2">Username</p>
          <input
            type={"text"}
            placeholder="Username"
            className="input_in_dashboard_search"
          />
        </div>
        <div className="my-1">
          <p className="text-gray-700 my-2">Email</p>
          <input
            type={"text"}
            placeholder="Email"
            className="input_in_dashboard_search"
          />
        </div>
        <div className="my-1">
          <p className="text-gray-700 my-2">Phone</p>
          <input
            type={"text"}
            placeholder="Phone number"
            className="input_in_dashboard_search"
          />
        </div>
        <div className="my-1">
          <p className="text-gray-700 my-2">Phone</p>
          <input
            type={"text"}
            placeholder="Phone number"
            className="input_in_dashboard_search"
          />
        </div>
        <div className="my-1">
          <p className="">Country</p>
        </div>
      </div>
      {/* to show data */}
      <div className=""></div>
    </div>
  );
};
Dashboard.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
