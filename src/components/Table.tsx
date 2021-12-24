import React, { ReactElement, ReactNode, useEffect, useState } from "react";

interface Itable {
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

const Table = ({ data }: { data: Itable[] }) => {
  // useEffect(() => {
  //   console.log("table -> my props ===", data);
  // }, [data]);
  return (
    <div className=" overflow-auto">
      <table className="items-center w-full bg-transparent table-auto">
        <thead>
          <tr>
            <th
              className={
                "px-1 border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-center"
              }
            >
              Username
            </th>
            <th
              className={
                "px-1 border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-center"
              }
            >
              Email
            </th>
            <th
              className={
                "px-1 border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-center"
              }
            >
              Phone
            </th>
            <th
              className={
                "px-1 border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-center"
              }
            >
              Country
            </th>
            <th
              className={
                "px-1 border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-center"
              }
            >
              Address
            </th>
            <th
              className={
                "px-1 border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-center"
              }
            >
              Visa type
            </th>
            <th
              className={
                "px-1 border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-center"
              }
            >
              Status
            </th>
            <th
              className={
                "px-1 border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-center"
              }
            >
              Stay duration
            </th>
            <th
              className={
                "px-1 border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-center"
              }
            >
              Sending organization
            </th>
            <th
              className={
                "px-1 border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-center"
              }
            >
              Receiving organization
            </th>
            <th
              className={
                "px-1 border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-center"
              }
            >
              Supervising organization
            </th>
            <th
              className={
                "px-1 border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-center"
              }
            >
              SNS
            </th>
            <th
              className={
                "px-1 border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-center"
              }
            >
              Registered
            </th>
            <th
              className={
                "px-1 border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-center"
              }
            >
              Last login
            </th>
            <th
              className={
                "px-1 border border-solid py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-center"
              }
            >
              Deleted
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={data.indexOf(item)}>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <span className="">{item.userName}</span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <span>{item.email}</span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <span>{item.phone}</span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <span>{item.country}</span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <span>{item.address}</span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <span>{item.visatype}</span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <span>{item.status}</span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <span className="mr-2">{item.stayDuration.start.toUTCString().slice(0,11)}</span>
                  <span>{item.stayDuration.end?.toUTCString().slice(0,11)}</span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <span>{item.organization1}</span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <span>{item.organization2}</span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <span>{item.organization3}</span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <span>{item.sns}</span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <span>{item.registered.toUTCString().slice(0,11)}</span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <span>{item.lastLogin.toUTCString().slice(0,11)}</span>
                </td>
                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                  <span>{item.deleted}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
