import type { NextPage } from "next";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
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
        autoComplete={"off"}
        className="input_in_dashboard_search"
      />
    </div>
  );
};

interface IdatePick {
  label: string;
  startDate: Date;
  endDate?: Date;
}

const DatePicker: React.FC<IdatePick> = ({ label, startDate, endDate }) => {
  const [OpenCalendar,setOpenCalendar]= useState(false)
  const handleDateLabel = () => {
    setOpenCalendar(!OpenCalendar)
  }
  return (
    <div className="">
      <p className="label_in_dashboard_search">{label}</p>
      <span onClick={() => handleDateLabel()} className='cursor-pointer bg-gray-600 px-3 py-2 rounded'>
        {" "}
        {startDate.toString().slice(0, 10)}{" "}
        {endDate ? "- " + endDate.toString().slice(0, 10) : ""}
      </span>
      <div className={`w-60 h-60 bg-yellow-200 sticky ${OpenCalendar ? 'block' : 'hidden'}`}>
      
      </div>
    </div>
  );
};

const Dashboard: NextPageWithLayout = () => {
  const [myInnterHeight, setmyInnterHeight] = useState(0);
  useEffect(() => {
    const currentHeight = global.window.innerHeight;
    // header height is 56px
    setmyInnterHeight(currentHeight - 56);
  }, []);

  return (
    <div className="md:flex md:flex-row w-full h-full">
      {/* to search */}
      <div
        className="p-4 w-72 xl:w-80 text-sm bg-gray-50 overflow-scroll"
        style={{ maxHeight: myInnterHeight }}
      >
        <InputBoxWithLabel label="Username" />
        <InputBoxWithLabel label="Email" />
        <InputBoxWithLabel label="Phone" />
        <SelectBoxWithLabel label="Country" data={mockData} />
        <SelectBoxWithLabel label="Address" data={mockData} />

        <SelectBoxWithLabel label="Visa type" data={mockData} />
        <SelectBoxWithLabel label="Status" data={mockData} />
        <DatePicker label="Stay duration" startDate={new Date()} endDate={new Date()}/>
        <SelectBoxWithLabel label="Organization 1" data={mockData} />
        <SelectBoxWithLabel label="Organization 2" data={mockData} />

        <SelectBoxWithLabel label="Organization 3" data={mockData} />
        <SelectBoxWithLabel label="SNS" data={mockData} />
        <SelectBoxWithLabel label="Registered" data={mockData} />
        <SelectBoxWithLabel label="Last login" data={mockData} />
        <SelectBoxWithLabel label="Deleted" data={mockData} />
        <div className="flex m-5 justify-center">
          <button className="py-3 px-6 m-2 bg-black rounded text-white font-semibold w-30">
            clear
          </button>
          <button className="py-3 px-6 m-2 bg-green-500 rounded text-white font-semibold w-30">
            Search
          </button>
        </div>
      </div>
      {/* to show data */}
      <div
        className="p-4 w-full text-sm bg-gray-50 overflow-scroll"
        style={{ maxHeight: myInnterHeight }}
      >
        table component goes here
      </div>
    </div>
  );
};
Dashboard.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
