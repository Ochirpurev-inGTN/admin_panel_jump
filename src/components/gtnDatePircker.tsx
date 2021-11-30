import Icon from "@mdi/react";
import { mdiArrowCollapseLeft, mdiArrowCollapseRight } from "@mdi/js";
import React, { ReactElement, ReactNode, useEffect, useState } from "react";

// to do : hugjuulj export hiih
interface IdatePick {
    label: string;
    startDate: Date;
    endDate?: Date;
  }
  
  const MyDatePicker: React.FC<IdatePick> = ({ label, startDate, endDate }) => {
    const [OpenCalendar, setOpenCalendar] = useState(false);
    const [Days, SetDays] = useState([1, 2]);
  
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const seveDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
  
    const getNumberOfDaysInMonth = (year: string, month: string) => {
      const Days = new Date(Number(year), Number(month), 0).getDate();
      return Days;
    };
  
    const generateMonth = () => {
      const myDays = getNumberOfDaysInMonth("2020", "2");
      const DaysArray = [];
      for (let i = 0; i < myDays; i++) {
        DaysArray.push(i + 1);
      }
      console.log("days arra ===", DaysArray);
      SetDays(DaysArray);
    };
    const handleDateLabel = () => {
      !OpenCalendar ? generateMonth() : null;
      setOpenCalendar(!OpenCalendar);
    };
  
    return (
      <div className="relative">
        <p className="label_in_dashboard_search">{label}</p>
        <span
          onClick={() => handleDateLabel()}
          className="cursor-pointer bg-gray-200 px-3 py-2 rounded"
        >
          {" "}
          {startDate.toString().slice(0, 10)}{" "}
          {endDate ? "- " + endDate.toString().slice(0, 10) : ""}
        </span>
        <div
          className={`w-60 absolute top-14 left-0 bg-yellow-200 p-3  ${
            OpenCalendar ? "block" : "hidden"
          }`}
        >
          <div className="flex justify-between py-2">
            <div className="">
              {" "}
              <Icon
                path={mdiArrowCollapseLeft}
                title={"Previous month"}
                size={"1rem"}
                className="cursor-pointer"
              />{" "}
            </div>
            <div className="">Feb 2020</div>
            <div className="">
              <Icon
                path={mdiArrowCollapseRight}
                title={"Next month"}
                size={"1rem"}
                className=" cursor-pointer"
              />{" "}
            </div>
          </div>
          <div className=" bg-yellow-400 border-b border-gray-700 grid grid-cols-7 gap-1">
            {seveDays.map((garig) => {
              return (
                <div className="p-1 m-1  text-xs w-6" key={garig}>
                  {garig}
                </div>
              );
            })}
          </div>
          <div className="grid grid-cols-7 gap-0">
            {Days.map((day) => {
              return (
                <div
                  key={day}
                  className="p-1 m-1 w-6 cursor-pointer flex justify-center hover:bg-gray-300"
                >
                  <span>{day}</span>
                </div>
              );
            })}
          </div>
          {/* <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est rerum
              minus non quia beatae? Tempora aliquam aperiam eaque suscipit
              voluptas, dolore cumque modi. Cumque quos nisi dolores, ut in
              mollitia?
              
            </p> */}
        </div>
      </div>
    );
  };