import { Link } from "react-router-dom";
import Navbar from "../../globalComponents/Navbar";

const bannerStyle = {
  backgroundImage: "url('/img/agric3.jpg')",
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
}

export default function Home() {
  return (
    <>
        <Navbar/>
        <div className='min-h-screen bg-black p-4'>
          <div style={bannerStyle} className='min-h-screen p-4 flex flex-col justify-center items-center'>
            <h1 className="text-white font-bold text-2xl">Welcome</h1>
              <p className="text-md text-center text-white w-full md:w-2/5">
                In publishing and graphic design, Lorem ipsum is a placeholder 
                text commonly used to demonstrate the visual form of a document 
                or a typeface without relying on meaningful content. Lorem ipsum 
                may be used as a placeholder before final copy is available. It is 
                also used to temporarily replace text in a process called greeking, 
                which allows designers to consider the form of a webpage or publication, 
                without the meaning of the text influencing the design.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center items-center">
                <Link className=' text-center hover:text-white mt-4 min-w-40 p-2 border-0 border bg-violet-400 text-white rounded' to='/elibrary'>
                  Library
                </Link>
                <button className='mt-4 min-w-40 p-2 border-0 border bg-orange-400 text-white rounded'>Chat With Industry Experts</button>
                <button className='mt-4 min-w-40 p-2 border-0 border bg-green-400 text-white rounded'>Community</button>
              </div>
          </div>
        </div>
    </>
  );
}
