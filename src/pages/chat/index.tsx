import type { NextPage } from "next";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import DatePicker from "react-datepicker";
import Table from "../../components/Table";
import { useForm, SubmitHandler } from "react-hook-form";

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
}

const InputBoxWithLabel: React.FC<IcustomInput> = ({ codeName, label }) => {
  return (
    <input
      type={"text"}
      name={label}
      placeholder={label}
      autoComplete={"off"}
      className="input_in_dashboard_search"
    />
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
  userName: "-",
  email: "-",
  phone: "-",
  country: "-",
  address: "-",
  visatype: "-",
  status: "-",
  stayDuration: { start: new Date(), end: new Date() },
  organization1: "-",
  organization2: "-",
  organization3: "-",
  sns: "-",
  registered: new Date(),
  lastLogin: new Date(),
  deleted: true,
};

type Iinputs = {};
const Chat: NextPageWithLayout = () => {
  const [myInnterHeight, setmyInnterHeight] = useState(0);
  const [searchState, setsearchState] = useState<IsearchState>(mockObj);
  const [tempToTable, settempToTable] = useState<IsearchState>(mockObj);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IsearchState>();

  const onSubmit: SubmitHandler<IsearchState> = (data) =>
    console.log("my form data===", data);

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
    settempToTable({ ...searchState });
  };

  return (
    <div className="sm:flex sm:flex-row w-full h-full relative">
      {/* to search */}
      <div
        className="p-4 w-72 xl:w-80 text-sm bg-gray-50 overflow-scroll max-h-[calc(100vh-56px)]"
        // style={{ maxHeight: myInnterHeight }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            defaultValue={"chicken"}
            {...register("userName")}
            className="input_in_dashboard_search"
          />
          <input defaultValue={"idii"} {...register("email")} />
          <InputBoxWithLabel
            codeName="address"
            label="Address"
            {...register("address")}
          />
          <input type={"submit"} />
        </form>
      </div>
      {/* to show data */}
      <div
        className="p-4 w-full text-sm bg-gray-50 overflow-scroll max-h-[calc(100vh-56px)]"
        // style={{ maxHeight: myInnterHeight }}
      >
        <p className="">this chat component</p>
        <Table data={[tempToTable]} />
      </div>
    </div>
  );
};
Chat.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Chat;
