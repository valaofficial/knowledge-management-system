import Navbar from "../../globalComponents/Navbar";

export default function About() {
  return (
    <>
        <Navbar/>
        <div className="max-h-60 bg-gray-800">
            <img className="w-full max-h-60 opacity-80" src="/img/agric.jpg"/>
        </div>
        <div className="flex justify-center">
        <p className="absolute top-40 z-10 text-white font-bold text-2xl">
            About Us
        </p>
        </div>
    </>
  );
}
