import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import Layout from "../../components/Layout";
import Link from "next/link";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const Calendar: NextPageWithLayout = () => {
  return (
    <div className="m-3 p-3 md:flex-row w-full flex-col">
     calendar
    </div>
  );
};
Calendar.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Calendar;
