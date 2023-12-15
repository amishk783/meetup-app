import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";
import UserMeetupCard from "../components/UserMeetup/UserMeetupCard";
const UserEvent = () => {
  const [meetups, setMeetup] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      const url = "http://localhost:3003/meetup/get-meetup";
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token} `,
          },
        });
        if (!response.ok) {
          console.log("something went wrong")
        }
        const data = await response.json();
        setMeetup(data.allmeetup);



      } catch (error) {
        console.log(error)
      }
    };
    fetchData().catch((error) => {
      console.log(error);
    })
  }, [token]);

  const clickHandler = (event) => {
    console.log("clicked");
  }
  console.log(meetups)

  return (
    <Fragment>
      <Header />
      <div class=" justify-center gap-10 pt-12">
        <div className="flex flex-col md:flex-row  justify-between w-full items-start max-xl:padding-x">
          <div className="flex md:flex-row gl:gap-10 w-1/3">
            <div className="relative mt-8 flex-1 justify-center max-xl:padding-x max-xl:py-40">
              <div className="m-20 pl-10 text-3xl">
                <Link to="/home" className="  bg-neutral-400 px-3 py-2 rounded-md" >Back</Link>
              </div>
              <div className=""></div>
            </div>
          </div>
          <div className="relative mt-8 flex-1 justify-center w-1/2 max-xl:padding-x md:my-20 ">
            <h1 className="text-3xl p-4 mt-2">Your Events</h1>
            {meetups.map((meetup) => (
              <UserMeetupCard
                key={meetup.id}
                name={meetup.name}
                description={meetup.description}
                address={meetup.address}
                image={meetup.image}
                date={meetup.date}
                
              />
        
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default UserEvent;
