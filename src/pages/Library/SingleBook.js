import Navbar from "../../globalComponents/Navbar";

export default function SingleBook() {
  return (
    <>
        <Navbar/>
        <section className="min-h-screen p-4">
            <div className="flex flex-col justify-center items-center bg-slate-50 p-4">
                <img className="max-h-80 shadow-2xl" src="/img/book.jpg"/>
                <h1 className="mt-4 text-2xl font-bold">Book Title</h1>
                <p className="text-lg">Book Author</p>
            </div>
            <div className="flex flex-col justify-center items-center mt-8">
                <p className="text-md text-center w-3/5">
                In publishing and graphic design, Lorem ipsum is a placeholder 
                text commonly used to demonstrate the visual form of a document 
                or a typeface without relying on meaningful content. Lorem ipsum 
                may be used as a placeholder before final copy is available. It is 
                also used to temporarily replace text in a process called greeking, 
                which allows designers to consider the form of a webpage or publication, 
                without the meaning of the text influencing the design.
                </p>

                <button className='mt-4 w-40 p-2 border bg-amber-400 text-white rounded'>Download</button>
            </div>
        </section>
    </>
  );
}
