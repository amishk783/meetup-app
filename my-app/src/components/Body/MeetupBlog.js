import { meetupBlog } from "../../constants";
import MeetupBlogCard from "./MeetupBlogCard";

const MeetupBlog = () => {
  return (
    <div className="max-container mt-16">
      <div className="flex flex-col justify-between">
        <h1 className="text-3xl font-semibold mb-5">
          Friendships are made on Meetup
        </h1>
        <p className=" text-lg text-clip w-full text-gray6 sm:w-3/4 md:mb-2">
          Since 2002, members have used Meetup to make new friends, meet
          like-minded people, spend time on hobbies, and connect with locals
          over shared interests. Learn how.
        </p>
      </div>
      <div
        className="mt-16
       flex mb-12"
      >
        {meetupBlog.map((blog) => (
          <MeetupBlogCard
            key={blog.title}
            name={blog.title}
            description={blog.description}
            img={blog.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MeetupBlog;
