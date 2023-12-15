const MeetupCard = ({ name, img, date, hostedby }) => {
  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={img}
        alt={name}
        className="w-[282px] h-[153px] rounded-md"
      ></img>
      <div className="mr-3">
        <h1 className=" font-montserrat text-xl leading-normal mr-5 text-slate-gray">
          {name}
        </h1>
        <p className="mt-2 text-lg leading-normal font-normal font-palanquin">
          {hostedby}
        </p>

        <p className="mt-2 text-base leading-normal font-semibold font-palanquin">
          {date}
        </p>
      </div>
    </div>
  );
};

export default MeetupCard;
