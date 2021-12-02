import type { NextPage } from "next";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Table from "../../components/Table";
import { useForm, SubmitHandler, Path, UseFormRegister } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface IcustomInput {
  label: Path<IsearchState>;
  register: UseFormRegister<IsearchState>;
}

const InputBoxWithLabel = ({ label, register }: IcustomInput) => {
  return (
    <>
      <label>{label}</label>
      <input
        type={"text"}
        placeholder={label}
        autoComplete={"off"}
        className="input_in_dashboard_search"
        {...register(label)}
      />
    </>
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

const Chat: NextPageWithLayout = () => {
  const [tempToTable, settempToTable] = useState<IsearchState>(mockObj);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IsearchState>();

  const onSubmit: SubmitHandler<IsearchState> = (data) =>
    console.log("my form data===", data);

  return (
    <div className="sm:flex sm:flex-row w-full h-full relative">
      {/* to search */}
      <div
        className="p-4 w-72 xl:w-80 text-sm bg-gray-50 overflow-scroll max-h-[calc(100vh-56px)]"
        // style={{ maxHeight: myInnterHeight }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputBoxWithLabel label="userName" register={register} />
          <InputBoxWithLabel label="email" register={register} />
          {/* <input
            defaultValue={"chicken"}
            {...register("userName")}
            className="input_in_dashboard_search"
          /> */}
          <input type={"submit"} className="button_in_dashboard_search"/>
        </form>
      </div>
      {/* to show data */}
      <div
        className="p-4 w-full text-sm bg-gray-50 overflow-scroll max-h-[calc(100vh-56px)]"
        // style={{ maxHeight: myInnterHeight }}
      >
        <p className="">this is chat component</p>
        <Table data={[tempToTable]} />
      </div>
    </div>
  );
};
Chat.getLayout = (page) => {
  return <Layout>{page}</Layout>;
};

export default Chat;
