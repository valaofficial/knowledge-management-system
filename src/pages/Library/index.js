import Navbar from "../../globalComponents/Navbar";
import BookCard from "./components/BookCard";

export default function Library() {
  return (
    <>
        <Navbar/>
        <div className="max-w-7xl mt-4 p-8">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl">General</h3>
              <p className="text-md">Read More</p>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-evenly gap-8">
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
            </div>
            
            <div className="flex justify-between items-center">
              <h3 className="text-2xl">Pre Planting</h3>
              <p className="text-md">Read More</p>
            </div>
            <div className="p-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-evenly gap-8">
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
            </div>


            <div className="flex justify-between items-center">
              <h3 className="text-2xl">Planting</h3>
              <p className="text-md">Read More</p>
            </div>
            <div className="p-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-evenly gap-8">
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
            </div>

            <div className="flex justify-between items-center">
              <h3 className="text-2xl">Post Harvest</h3>
              <p className="text-md">Read More</p>
            </div>
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-evenly gap-8">
                <BookCard/>
                <BookCard/>
                <BookCard/>
                <BookCard/>
            </div>
        </div>
    </>
  );
}
