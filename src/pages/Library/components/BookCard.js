import {
    Link
  } from "react-router-dom";

export default function BookCard() {
  return (
    <>
        <div className="p-2 w-60 h-40 flex justify-around">
            <div className="max-h-36 shadow-lg">
                <img className="max-h-full" src="/img/book.jpg"/>
            </div>
            <div className="h-36 flex flex-col justify-between">
                <div>
                <p className="font-semibold text-md">Book Title</p>
                <p className="text-xs text-gray-400">Book Author</p>
                </div>
                <div>
                    <Link to='/single-book'>
                        <button className='w-20 p-1 border border-violet-400 text-violet-400 rounded'>Get Book</button>
                    </Link>
                </div>
            </div>
        </div>
    </>
  );
}
