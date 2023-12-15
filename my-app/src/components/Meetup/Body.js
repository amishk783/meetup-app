import MeetUpForm from "./MeetupForm";
import groupImage from "../../assests/images/group-img.jpg"


const Body = () => {
  return (
    <div className="w-full flex xl:flex-row flex-col justify-center gap-10 max-container pt-16 bg-white">
      <img
        className="pt-15 "
        src={groupImage}
        alt="event"
        height={500}
        width={500}
      ></img>
      <MeetUpForm />
    </div>
  );
};

export default Body;
