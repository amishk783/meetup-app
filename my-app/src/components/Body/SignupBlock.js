import {useNavigate } from "react-router-dom";
import signUpImage from "./signUpImage.jpg";
import classes from "./Signup.module.css";

const SignupBlock = () => {
  
  const navigate = useNavigate();
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center gap-9 max-container pt-5 pl-20" >
      <div className="relative xl:w-3/5 flex flex-col justify-center items-start w-full max-xl:padding-x">
        <h2 className="mt-10 font-palaquin text-2xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          Join Meetup
        </h2>
        <p className="text-xl font-montserrat text-slate-gray inline-block mt-5">
          People use Meetup to meet new people, learn new things, find support,
          get out of their comfort zones, and pursue their passions, together.
          Membership is free.
        </p>
        <button
          onClick={() => navigate("/signup")}
          className="mr-4 mt-5 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
        >
          Sign Up
        </button>
      </div>
      <div className="relative mt-8 flex-1 w-full max-xl:padding-x max-xl:py-40">
        <img
          src={signUpImage}
          alt="group"
          width={250}
          height={200}
          className="relative z-10 hover:opacity-90"
        />
      </div>
    </section>
  );
};
export default SignupBlock;
