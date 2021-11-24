const BodyWrapper: React.FC = ({children}) => {
    return (
        <div className='min-h-screen'>
        <main className="w-full min-h-screen">
            {children}
        </main>
        </div>
    )
}

export default BodyWrapper;