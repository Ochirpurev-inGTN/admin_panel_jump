import SideBar from "./Sidebar";
import BodyWrapper from "./BodyWrapper";

const Layout: React.FC = ({ children }) => {
  return (
    <BodyWrapper>
      <div className="flex min-h-screen bg-gray-200">
        <SideBar />
        <section className="w-full flex-col">
          <div className="w-full h-14 shadow-md bg-gray-100 py-3 px-5">
              <p className=' text-right'>
              User Name
              </p>
          </div>
          <div className="">{children}</div>
        </section>
      </div>
    </BodyWrapper>
  );
};

export default Layout;
