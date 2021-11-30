import type { NextPage } from "next";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import DatePicker from "react-datepicker";
import Table from "../../components/Table";
import "react-datepicker/dist/react-datepicker.css";

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
  codeName: string;
  label: string;
  data: IMockData[];
  onchange: (codeName: string, value: string | Date | boolean) => void;
}
const SelectBoxWithLabel: React.FC<ISelectBox> = ({
  codeName,
  label,
  data,
  onchange,
}) => {
  return (
    <div className="my-1">
      <p className="label_in_dashboard_search">{label}</p>
      <select
        placeholder={label}
        className="select_in_dashboard_search"
        onChange={(e) => onchange(codeName, e.target.value)}
      >
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
  codeName: string;
  label: string;
  onchange: (codeName: string, value: string | Date | boolean) => void;
}

const InputBoxWithLabel: React.FC<IcustomInput> = ({
  codeName,
  label,
  onchange,
}) => {
  return (
    <div className="my-1">
      <p className="label_in_dashboard_search">{label}</p>
      <input
        type={"text"}
        name={label}
        placeholder={label}
        autoComplete={"off"}
        className="input_in_dashboard_search"
        onChange={(e) => onchange(codeName, e.target.value)}
      />
    </div>
  );
};
interface IcustomRadio {
  codeName: string;
  label: string;
  onchange: (codeName: string, value: string | Date | boolean) => void;
}

const RadioButtonWithLabel: React.FC<IcustomRadio> = ({
  codeName,
  label,
  onchange,
}) => {
  return (
    <div className="my-1">
      <p className="label_in_dashboard_search">{label}</p>
      <div className="flex justify-center">
        <div className=" flex justify-center items-center">
          <input
            type={"radio"}
            name={codeName}
            value={"yes"}
            className="w-8"
            onChange={(e) => onchange(codeName, e.target.value)}
          />
          <label>Yes</label>
        </div>
        <div className=" flex justify-center items-center w-20">
          <input
            type={"radio"}
            name={codeName}
            value={"no"}
            className="w-8"
            onChange={(e) => onchange(codeName, e.target.value)}
          />
          <label>No</label>
        </div>
      </div>
    </div>
  );
};

interface IsearchState {
  userName: string;
  email: string;
  phone: string;
  country: string;
  address: string;
  visatype: string;
  status: string;
  stayDuration: { start: Date; end?: Date };
  organization1: string;
  organization2: string;
  organization3: string;
  sns: string;
  registered: Date;
  lastLogin: Date;
  deleted: boolean;
}

const mockObj: IsearchState = {
  userName: "",
  email: "",
  phone: "",
  country: "",
  address: "",
  visatype: "",
  status: "",
  stayDuration: { start: new Date(), end: new Date() },
  organization1: "",
  organization2: "",
  organization3: "",
  sns: "",
  registered: new Date(),
  lastLogin: new Date(),
  deleted: true,
};

const Dashboard: NextPageWithLayout = () => {
  const [myInnterHeight, setmyInnterHeight] = useState(0);
  const [searchState, setsearchState] = useState<IsearchState>(mockObj);
  const [tempToTable, settempToTable] = useState<IsearchState>(mockObj);

  useEffect(() => {
    const currentHeight = global.window.innerHeight;
    // header height is 56px
    setmyInnterHeight(currentHeight - 56);
  }, []);

  const stateHandler = (
    codeName: string,
    value: string | Date | boolean | object | null,
    subCodeName?: string
  ) => {
    if (searchState) {
      searchState.hasOwnProperty(codeName)
        ? subCodeName
          ? setsearchState((prev) => {
              return {
                ...prev,
                [codeName]: { ...prev.stayDuration, [subCodeName]: value },
              };
            })
          : setsearchState((prev) => {
              return { ...prev, [codeName]: value };
            })
        : null;
    } else {
      null;
    }
  };

  const searchHandler = () => {
    console.log("my all states === ", searchState);
    settempToTable({...searchState})
  };

  return (
    <div className="md:flex md:flex-row w-full h-full relative">
      {/* to search */}
      <div
        className="p-4 w-72 xl:w-80 text-sm bg-gray-50 overflow-scroll"
        style={{ maxHeight: myInnterHeight }}
      >
        <InputBoxWithLabel
          codeName="userName"
          label="Username"
          onchange={stateHandler}
        />
        <InputBoxWithLabel
          codeName="email"
          label="Email"
          onchange={stateHandler}
        />
        <InputBoxWithLabel
          codeName="phone"
          label="Phone"
          onchange={stateHandler}
        />
        <SelectBoxWithLabel
          label="Country"
          data={mockData}
          codeName="country"
          onchange={stateHandler}
        />
        <SelectBoxWithLabel
          label="Address"
          data={mockData}
          codeName="address"
          onchange={stateHandler}
        />

        <SelectBoxWithLabel
          label="Visa type"
          data={mockData}
          codeName="visatype"
          onchange={stateHandler}
        />
        <SelectBoxWithLabel
          label="Status"
          data={mockData}
          codeName="status"
          onchange={stateHandler}
        />
        <div className="">
          <p className="">Stay duration</p>
          <div className="flex">
            <DatePicker
              selected={searchState.stayDuration.start}
              startDate={searchState.stayDuration.start}
              selectsStart
              endDate={searchState.stayDuration.end}
              onChange={(date) => stateHandler("stayDuration", date, "start")}
              className="m-1 w-24 p-1 border"
            />
            <DatePicker
              selected={searchState.stayDuration.end}
              startDate={searchState.stayDuration.start}
              selectsEnd
              endDate={searchState.stayDuration.end}
              onChange={(date) => stateHandler("stayDuration", date, "end")}
              className="m-1 w-24 p-1 border"
            />
          </div>
        </div>
        <SelectBoxWithLabel
          label="Organization 1"
          data={mockData}
          codeName="organization1"
          onchange={stateHandler}
        />
        <SelectBoxWithLabel
          label="Organization 2"
          data={mockData}
          codeName="organization2"
          onchange={stateHandler}
        />

        <SelectBoxWithLabel
          label="Organization 3"
          data={mockData}
          codeName="organization3"
          onchange={stateHandler}
        />
        <SelectBoxWithLabel
          label="SNS"
          data={mockData}
          codeName="sns"
          onchange={stateHandler}
        />
        <div className="">
          <p className="">Registered</p>
          <DatePicker
            selected={searchState.registered}
            onChange={(date) => stateHandler("registered", date)}
            className="m-1 w-24 p-1 border"
          />
        </div>
        <div className="">
          <p className="">Last login</p>
          <DatePicker
            selected={searchState.lastLogin}
            onChange={(date) => stateHandler("lastLogin", date)}
            className="m-1 w-24 p-1 border"
          />
        </div>
        <RadioButtonWithLabel
          label="Deleted"
          codeName="deleted"
          onchange={stateHandler}
        />
        <div className="flex m-5 justify-center">
          <button className="py-3 px-6 m-2 bg-black rounded text-white font-semibold w-30">
            clear
          </button>
          <button
            className="py-3 px-6 m-2 bg-green-500 rounded text-white font-semibold w-30"
            onClick={() => searchHandler()}
          >
            Search
          </button>
        </div>
      </div>
      {/* to show data */}
      <div
        className="p-4 w-full text-sm bg-gray-50 overflow-scroll"
        style={{ maxHeight: myInnterHeight }}
      >
        <Table data={[tempToTable]} />
      </div>
    </div>
  );
};
Dashboard.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Dashboard;
