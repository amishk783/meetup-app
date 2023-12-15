import { meetupDetails } from "../../constants";
import MeetupCard from "./MeetupCard";

const UpcomigMeetup = () => {
  return (
    <section className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5 border-b-2z border-slate-800">
        <h2 className="text-3xl font-palanquin font-bold">
          Upcoming online events
        </h2>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3  sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
        {meetupDetails.map((item) => (
          <MeetupCard
            key={item.id}
            name={item.title}
            img={item.image}
            date={item.date}
            hostedby={item.hostedby}
          />
        ))}
      </div>
    </section>
  );
};

export default UpcomigMeetup;
