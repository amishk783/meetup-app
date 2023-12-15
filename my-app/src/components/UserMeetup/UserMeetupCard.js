import React from "react";

import meetupimg from "../../constants/cardimg.jpg";

const UserMeetupCard = ({name,address,description,image,date}) => {
  return (
    <div className="flex w-2/3 max-sm:w-full m-8 transition duration-300 ease-in-out transform hover:scale-105">
      <img
        src={image}
        alt={name}
        className="w-[395px] h-[171px] rounded-md mb-5"
      ></img>
      <div className="w-2/3 ml-5 pl-5 flex-col justify-between items-center">
        <h1 className="font-montserrat text-2xl font-semibold leading-normal mr-3 text-slate-gray">
          {name}
        </h1>
        <p className="mt-2 text-base leading-normal font-normal font-palanquin">
          {description}
        </p>
        <p className="mt-2 text-lg leading-normal font-normal font-palanquin">
          {address}
        </p>
      </div>
      <div className="w-1 flex flex-col items-center">
        <button className="px-3 py-2 bg-red-500 rounded-md my-2">Remove</button>
        <button className="px-7 py-2  bg-blue-200 rounded-md my-2">Edit</button>
      </div>
    </div>
  );
};

export default UserMeetupCard;
