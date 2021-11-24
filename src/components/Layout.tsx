import SideBar from './Sidebar'
import BodyWrapper from './BodyWrapper'

const Layout: React.FC = ({children}) => {
    return (
        <BodyWrapper>
            <div className='flex h-screen bg-gray-200'>
            <SideBar></SideBar>
            <section className='sd:flex-row flex flex-col p-5'>
                {children}
            </section>
            </div>
        </BodyWrapper>
    )
}

export default Layout;