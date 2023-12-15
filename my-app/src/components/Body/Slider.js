import groupImage from './group-img.jpg'
const Slider = () => {
  return (
    <section className="w-full flex xl:flex-row flex-col justify-center gap-10 max-container pt-12">
      <div className="relative xl:w-3/5 flex flex-col justify-center items-start w-full max-xl:padding-x">
        <h1 className="mt-10 font-palaquin text-4xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          The Community Hub — Where Passions Turn into Connections.
        </h1>
        <p className="text-xl font-montserrat text-slate-gray inline-block mt-5">
          Whether you're into trekking, literature, professional networking, or
          sharing skills, countless like-minded individuals await on Meetup.
          Daily events are unfolding — become a part of the excitement.
        </p>
        <button className="mr-4 mt-5 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
          Join Meetup
        </button>
      </div>
      <div className="relative mt-8 flex-1 justify-center w-full max-xl:padding-x max-xl:py-40">
        <img
          src={groupImage}
          alt="group"
          width={500}
          height={500}
          className="relative z-10 hover:opacity-90"
        />
      </div>
    </section>
  );
};

export default Slider;
