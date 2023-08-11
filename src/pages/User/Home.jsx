import Sidebar from "../../components/User/Sidebar";

const Home = () => {
  
    return (

        <div className='bg-gray-100 h-screen'>
            <Sidebar />
           
            <div className='flex justify-center'>
                <h1 className='text-5xl'>User Home</h1>
            </div>
        </div>

    );
};
export default Home