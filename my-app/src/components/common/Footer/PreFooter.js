import { Link } from "react-router-dom";

const PreFooter = () => {
  return (
    <div className="flex justify-start items-start gap-3 flex-wrap max-lg:flex-col w-full my-5 py-2 bg-transparent font-semibold border-b border-solid border-slate-50">
          <h1 className=" text-[25px] leading-[68px] lg:max-w-md font-palanquin font-bold mx-5 text-slate-100 ">
            Create your own Meetup
          </h1>
          <div className="mt-5 items-start">
            <Link
              to=""
              className="align-middle mr-4 bg-red-500 hover:bg-red-600 text-white px-5 py-3 rounded-md "
            >
              Get Started
            </Link>
          </div>
        </div>
  )
}

export default PreFooter;