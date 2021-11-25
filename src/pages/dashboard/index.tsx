import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";
import Layout from "../../components/Layout";
// import Link from "next/link";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

const mockData: IMockData[] = [
  {
    name: "text1",
    code: 1,
  },
  {
    name: "text2",
    code: 2,
  },
];

interface IMockData {
  name: string;
  code: number;
}
interface ISelectBox {
  label: string;
  data: IMockData[];
}
const SelectBoxWithLabel: React.FC<ISelectBox> = ({ label, data }) => {
  return (
    <div className="my-1">
      <p className="label_in_dashboard_search">{label}</p>
      <select placeholder={label} className="select_in_dashboard_search">
        {data.map((item) => {
          return (
            <option key={item.code} value={item.code}>
              {item?.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

interface IcustomInput {
  label: string;
}

const InputBoxWithLabel: React.FC<IcustomInput> = ({ label }) => {
  return (
    <div className="my-1">
      <p className="label_in_dashboard_search">{label}</p>
      <input
        type={"text"}
        placeholder={label}
        className="input_in_dashboard_search"
      />
    </div>
  );
};
const Dashboard: NextPageWithLayout = () => {
  return (
    <div className="md:flex-row w-full flex-col ">
      {/* to search */}
      <div className="p-4 w-72 xl:w-80 text-sm bg-gray-50 h-screen overflow-y-scroll">
        <InputBoxWithLabel label="Username" />
        <InputBoxWithLabel label="Email" />
        <InputBoxWithLabel label="Phone" />

        <SelectBoxWithLabel label="Country" data={mockData} />
        <SelectBoxWithLabel label="Address" data={mockData} />
        <SelectBoxWithLabel label="Visa type" data={mockData} />
        <SelectBoxWithLabel label="Status" data={mockData} />
        <SelectBoxWithLabel label="Stay duration" data={mockData} />
        
        <SelectBoxWithLabel label="Organization 1" data={mockData} />
        <SelectBoxWithLabel label="Organization 2" data={mockData} />
        <SelectBoxWithLabel label="Organization 3" data={mockData} />
        <SelectBoxWithLabel label="SNS" data={mockData} />
        <SelectBoxWithLabel label="Registered" data={mockData} />
        <SelectBoxWithLabel label="Last login" data={mockData} />
        <SelectBoxWithLabel label="Last login" data={mockData} />
        <SelectBoxWithLabel label="Last login" data={mockData} />
        <SelectBoxWithLabel label="Last login" data={mockData} />
        <SelectBoxWithLabel label="Last login" data={mockData} />

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
