import React, { useState } from "react";
import Link from "next/link";
import Icon from "@mdi/react";

import {
  mdiChevronUp,
  mdiViewDashboardOutline,
  mdiCalendarRangeOutline,
  mdiChat,
  mdiToggleSwitchOff,
  mdiStorefrontOutline,
  mdiEmailFastOutline,
  mdiWindowClosedVariant,
  mdiViewCompactOutline,
  mdiAccountCircleOutline,
  mdiCardAccountDetailsOutline,
  mdiTableLarge,
  mdiFormatColorFill,
} from "@mdi/js";

const sampleData: ISideBarSubItems[] = [
  {
    label: "MENU",
    subItems: [
      {
        label: "Dashboard",
        route: "/dashboard",
        icon: mdiViewDashboardOutline,
        subItems2: [],
      },
      {
        label: "Calendar",
        route: "/calendar",
        icon: mdiCalendarRangeOutline,
        subItems2: [],
      },
      {
        label: "Chat",
        route: "/dashboard",
        icon: mdiChat,
        subItems2: [],
      },
      {
        label: "Ecommerce",
        route: "/dashboard",
        icon: mdiStorefrontOutline,
        subItems2: [
          {
            label: "Products",
            route: "/dashboard",
          },
          {
            label: "Product Detail",
            route: "/dashboard",
          },
          {
            label: "Orders",
            route: "/dashboard",
          },
          {
            label: "Customers",
            route: "/dashboard",
          },
          {
            label: "Cart",
            route: "/dashboard",
          },
          {
            label: "Checkout",
            route: "/dashboard",
          },
          {
            label: "Shops",
            route: "/dashboard",
          },
          {
            label: "Add product",
            route: "/dashboard",
          },
        ],
      },

      {
        label: "Email",
        route: "/dashboard",
        icon: mdiEmailFastOutline,
        subItems2: [],
      },

      {
        label: "Kanban board",
        route: "/dashboard",
        icon: mdiWindowClosedVariant,
        subItems2: [],
      },

      {
        label: "Layout",
        route: "/dashboard",
        icon: mdiViewCompactOutline,
        subItems2: [
          {
            label: "Vertical",
            route: "/dashboard",
          },
          {
            label: "Horizontal",
            route: "/dashboard",
          },
        ],
      },
    ],
  },
  {
    label: "PAGES",
    subItems: [
      {
        label: "Authentication",
        route: "/dashboard",
        icon: mdiAccountCircleOutline,
        subItems2: [
          {
            label: "Login",
            route: "/dashboard",
          },
          {
            label: "Register",
            route: "/dashboard",
          },
          {
            label: "Recover Password",
            route: "/dashboard",
          },
        ],
      },
      {
        label: "Utility",
        route: "/dashboard",
        icon: mdiCardAccountDetailsOutline,
        subItems2: [
          {
            label: "Starter Page",
            route: "/dashboard",
          },
          {
            label: "Maintenance",
            route: "/dashboard",
          },
          {
            label: "Coming Soon",
            route: "/dashboard",
          },
          {
            label: "FAQs",
            route: "/dashboard",
          },
          {
            label: "Pricing",
            route: "/dashboard",
          },
        ],
      },
    ],
  },
  {
    label: "COMPONENTS",
    subItems: [
      {
        label: "Forms",
        route: "/dashboard",
        icon: mdiFormatColorFill,
        subItems2: [],
      },
      {
        label: "Tables",
        route: "/dashboard",
        icon: mdiTableLarge,
        subItems2: [
          {
            label: "Basic Tables",
            route: "/dashboard",
          },
          {
            label: "Data Tables",
            route: "/dashboard",
          },
          {
            label: "Responsive Table",
            route: "/dashboard",
          },
          {
            label: "Editable Table",
            route: "/dashboard",
          },
        ],
      },
    ],
  },
];

interface IsubItem2 {
  label: string;
  route: string;
}

interface ISideBarSubItems {
  label: string;
  subItems: {
    label: string;
    route: string;
    icon: string;
    subItems2: IsubItem2[];
  }[];
}

interface ISideBarItem {
  itemData: ISideBarSubItems;
  isActive: { mainItem: string; subItem: string };
  setActive: (val: { mainItem: string; subItem: string }) => void;
}

const SideBarItem: React.FC<ISideBarItem> = ({
  itemData,
  isActive,
  setActive,
}) => {
  const [flipArrow, setflipArrow] = useState(false);

  // handler for main item in side bar
  const labelHandler = (labelName: string) => {
    // for toggling sub items in main items
    if (isActive?.mainItem === labelName) {
      setflipArrow(!flipArrow);
    } else {
      setflipArrow(true);
    }
    // setting current active main item
    setActive({ ...isActive, mainItem: labelName });
  };

  return (
    <div className="py-3 w-full" key={itemData?.label}>
      <p className=" font-semibold text-sm">{itemData?.label}</p>
      {itemData?.subItems!.length > 0 &&
        itemData?.subItems.map((children) => {
          return (
            <div key={children?.label}>
              <Link
                href={children.route ? children.route : ""}
                key={children?.label}
              >
                <a className=" hover:text-blue-200" key={children?.label}>
                  <div
                    className={`flex items-center justify-between my-5 pr-2 ${
                      children.label === isActive.mainItem
                        ? "text-blue-200"
                        : " "
                    }`}
                    onClick={() => labelHandler(children?.label)}
                    key={children?.label}
                  >
                    <div className="flex items-center font-medium">
                      <Icon
                        path={children.icon}
                        title={children.label}
                        size={"1rem"}
                        className={`mr-2 `}
                        key={children?.label}
                      />{" "}
                      <span> {children.label}</span>{" "}
                    </div>

                    {children.subItems2.length > 0 ? (
                      // render arrow if item has children
                      <div
                        className={`${
                          children.label === isActive.mainItem && flipArrow
                            ? " transition-transform transform rotate-180"
                            : "transition-transform transform "
                        }`}
                      >
                        <Icon
                          path={mdiChevronUp}
                          title={children.label}
                          size={1}
                          vertical
                          key={children?.label}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </a>
              </Link>

              {children.subItems2.length > 0 && (
                // hide and show sub items from main items
                <div
                  className={`${
                    children.label === isActive.mainItem && flipArrow
                      ? "block  py-2 "
                      : " hidden py-2 "
                  }`}
                >
                  {children.subItems2.map((childrenItem) => {
                    return (
                      <SideBarSubItem
                        itemData={childrenItem}
                        key={childrenItem?.label}
                        setActive={setActive}
                        parentItem={children?.label}
                        isActive={isActive}
                        light={false}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

// side bar with logos
const SideBarLogoItem: React.FC<ISideBarItem> = ({
  itemData,
  isActive,
  setActive,
}) => {
  const [onHovertoShowSubItems, setonHovertoShowSubItems] = useState("");

  // handler for main item in side bar
  const labelHandler = (labelName: string) => {
    // for toggling sub items in main items
    setonHovertoShowSubItems(labelName);
    // setting current active main item
    setActive({ ...isActive, mainItem: labelName });
  };

  const hoverHandler = (labelName: string) => {
    // for toggling sub items in main items
    setonHovertoShowSubItems(labelName);
    // setting current active main item
  };
  const leaveHandler = (labelName: string) => {
    // for toggling sub items in main items
    setonHovertoShowSubItems(labelName);
  };

  return (
    <div className="my-1">
      {/* <p className=" font-semibold text-sm">{props?.itemData?.label}</p> */}
      {itemData?.subItems?.length > 0 &&
        itemData?.subItems?.map((children, index) => {
          return (
            <div key={children?.label}>
              <Link href={children.route ? children.route : ""} key={index}>
                <a className=" hover:text-blue-200 ">
                  <div
                    className={` py-4 ${
                      children.label === isActive.mainItem
                        ? "text-blue-200"
                        : " "
                    }`}
                    onClick={() => labelHandler(children?.label)}
                    onMouseLeave={() => leaveHandler("")}
                    onMouseOver={() => hoverHandler(children?.label)}
                  >
                    <div className="text-lg">
                      <Icon
                        path={children.icon}
                        title={children.label}
                        size={1}
                        className={`mx-auto `}
                      />{" "}
                    </div>
                  </div>
                </a>
              </Link>

              {/* hide and show sub items from main items */}
              <div
                className={`absolute z-50 left-20 left -mt-15 w-60 shadow-md bg-gray-100 ${
                  onHovertoShowSubItems === children?.label
                    ? " block "
                    : " hidden"
                }`}
                onMouseOver={() => hoverHandler(children?.label)}
                onMouseLeave={() => hoverHandler("")}
              >
                <div className="bg-gray-600 text-blue-200 p-4">
                  <p className="">{children?.label}</p>
                </div>
                {children.subItems2?.length > 0 &&
                  children.subItems2?.map((childrenItem, index) => {
                    return (
                      <SideBarSubItem
                        itemData={childrenItem}
                        key={index}
                        setActive={setActive}
                        parentItem={children?.label}
                        isActive={isActive}
                        light={true}
                      />
                    );
                  })}
              </div>
            </div>
          );
        })}
    </div>
  );
};

interface ISideBarSubItemsForSub {
  parentItem: string;
  itemData: IsubItem2;
  isActive: { mainItem: string; subItem: string };
  setActive: (val: { mainItem: string; subItem: string }) => void;
  light: boolean;
}

const SideBarSubItem: React.FC<ISideBarSubItemsForSub> = ({
  isActive,
  parentItem,
  setActive,
  itemData,
  light,
}) => {
  const subLabelHandler = (labelName: string) => {
    setActive({
      ...isActive,
      subItem: labelName,
      mainItem: parentItem,
    });
  };

  return (
    <div
      className={`ml-3 pl-3 py-2 ${
        itemData?.label === isActive?.subItem
          ? light
            ? "text-purple-600"
            : "text-blue-200"
          : " "
      }`}
    >
      <Link href={itemData.route ? itemData?.route : ""}>
        <a
          className={`${
            light ? "hover:text-purple-600" : "hover:text-blue-200"
          }  `}
        >
          <div className="" onClick={() => subLabelHandler(itemData?.label)}>
            {itemData?.label}
          </div>
        </a>
      </Link>
    </div>
  );
};

const SideBar: React.FC = ({ children }) => {
  const [OpenSidebar, setOpenSidebar] = useState(false);
  const [ActiveSideBar, setActiveSideBar] = useState({
    mainItem: "Dashboard",
    subItem: "",
  });

  const sideBarHandler = (state: boolean) => {
    setOpenSidebar(state);
  };

  return (
    <div className={`max-h-screen h-screen bg-gray-600 overflow-y-auto min-w-min`} >
      <div
        className={` text-blue-200`}
        onClick={() => sideBarHandler(!OpenSidebar)}
      >
        <Icon
          path={mdiToggleSwitchOff}
          title={"Toggle"}
          size={2}
          key={1}
          horizontal={OpenSidebar ? true : false}
          className={`cursor-pointer mx-auto ${
            OpenSidebar ? "text-blue-400" : ""
          }`}
        />
      </div>

      <div className="flex items-center text-blue-100 justify-center mt-3 text-center py-6">
        <span className="mx-2 text-base xl:text-medium font-semibold">JUMP</span>
      </div>
      {/* side bar with logos and labels */}
      <div
        className={` w-56 md:w-64 xl:w-72 py-4 px-4 text-blue-100 text-sm font-medium ${
          OpenSidebar ? "block " : "hidden "
        }`}
      >
        <div className=" text-sm pl-1 xl:pl-3">
          {OpenSidebar &&
            sampleData.map((item) => {
              return (
                <SideBarItem
                  key={item?.label}
                  itemData={item}
                  isActive={ActiveSideBar}
                  setActive={setActiveSideBar}
                />
              );
            })}
        </div>
      </div>

      {/* side bar with only logos */}
      <div
        className={`w-20 py-3 text-blue-100 text-sm font-medium overflow-x-hidden ${
          !OpenSidebar ? "block " : "hidden "
        }`}
      >
        <div className=" text-sm ">
          {!OpenSidebar &&
            sampleData.map((item) => {
              return (
                <SideBarLogoItem
                  key={item?.label}
                  itemData={item}
                  isActive={ActiveSideBar}
                  setActive={setActiveSideBar}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
