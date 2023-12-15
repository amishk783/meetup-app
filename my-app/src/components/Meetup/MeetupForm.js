import { FormLabel, TextField } from "@material-ui/core";

import { useState, useMemo,useEffect } from "react";

import useInput from "../../Hooks/useInput";
import { useNavigate } from "react-router-dom";

const MeetUpForm = () => {
  const [formError, setFormError] = useState(true);
  const [eventImage, setEventImage] = useState(null);
  const token = localStorage.getItem('token');
  console.log(token);
  const [shouldUpload, setShouldUpload] = useState(null); // to decide if upload should be done or not
  const [Date, setDate] = useState(null);
  const navigate = useNavigate();
  const [meetupError, setMeetupError] = useState(true);
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputError,
    valueChangeHandler: nameChangeHandler,
    isTouchHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: enteredAddress,
    isValid: enteredAddressIsValid,
    hasError: addressInputError,
    valueChangeHandler: addressChangeHandler,
    isTouchHandler: addressBlurHandler,
    reset: resetAddress,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredDescription,
    isValid: enteredDescriptionIsValid,
    hasError: discriptionInputError,
    valueChangeHandler: descriptionChangeHandler,
    isTouchHandler: descriptionBlurHandler,
    reset: resetDescription,
  } = useInput((value) => value.trim() !== "");

  const sumbitHandler = (event) => {
    event.preventDefault();
    console.log(enteredAddress, enteredDescription, enteredName);
    if (
      //checking for form validity
      enteredAddressIsValid &&
      enteredDescriptionIsValid &&
      enteredNameIsValid
    ) {
      setShouldUpload(true);
    }
  };
  const formData = useMemo(() => {
    const data = new FormData();
    data.append("enteredAddress", enteredAddress);
    data.append("enteredName", enteredName);
    data.append("enteredDescription", enteredDescription);
    data.append("image", eventImage);
    data.append("date", Date);
    return data;
  }, [enteredAddress, enteredName, enteredDescription, eventImage, Date]);

  useEffect(() => {
    //sending the data to backend

    if (!shouldUpload) return;

    const uploadData = async () => {
      const url = "http://localhost:3003/meetup/add-meetup";
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        if (!response.ok) {
          console.log("Error:", response.status, response.statusText);
          setFormError(true);
        }

        const data = await response.json();
        console.log(data.message);
        if (data.message === "Meetup created successfully") {
          navigate("/home");
        }
      } catch (error) {

        console.log("Error file loading", error);
        setMeetupError(true);
      }
      setShouldUpload(false);
    };
    uploadData();
  }, [shouldUpload, formData, token,navigate]);
  return (
    <div className="relative xl:3/5 flex flex-col justify-center max-xl:padding-x align-middle gap-5 mt-12 pt-12 max-container">
      {!formError && (
        <div className="border bg-red rounded-full">
          <h1>Something went wrong try again</h1>
        </div>
      )}
      {!meetupError && (
        <div className="border bg-red rounded-full">
          <h1>Meetup error</h1>
        </div>
      )}
      <form
        onSubmit={sumbitHandler}
        className="relative xl:3/5 flex flex-col justify-center max-xl:padding-x align-middle gap-5 mt-12 pt-12 max-container"
      >
        <div className="flex flex-col">
          <FormLabel className="items-start justify-start text-start font-palanquin pb-2">
            Your Name
          </FormLabel>
          <TextField
            type="text"
            size="medium"
            fullWidth
            id="fullWidth"
            value={enteredName}
            color={nameInputError ? "primary" : "secondary"}
            variant="outlined"
            placeholder="John Smith"
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
          ></TextField>
        </div>
        <div className="flex flex-col">
          <FormLabel className="items-start justify-start text-start font-palanquin pb-2">
            Event Address
          </FormLabel>
          <TextField
            type="text"
            size="medium"
            value={enteredAddress}
            color={enteredAddressIsValid ? "primary" : "secondary"}
            variant="outlined"
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
          ></TextField>
        </div>
        <FormLabel>Event's Poster</FormLabel>
        <TextField
          type="file"
          name="image"
          id="image"
          size="medium"
          accept="/image"
          onChange={(e) => {
            setEventImage(e.target.files[0]);
          }}
          alt="event poster image"
          variant="outlined"
        ></TextField>
        <FormLabel>Event's Date</FormLabel>
        <TextField
          type="date"
          size="normal"
          onChange={(e) => {
            setDate(e.target.valueAsDate);
          }}
          variant="outlined"
        ></TextField>
        <div className="flex flex-col">
          <FormLabel className="items-start justify-start text-start font-palanquin pb-2">
            Enter Event's Description
          </FormLabel>
          <TextField
            type="text"
            size="medium"
            value={enteredDescription}
            variant="outlined"
            color={enteredDescriptionIsValid ? "primary" : "secondary"}
            onChange={descriptionChangeHandler}
            onBlur={descriptionBlurHandler}
          ></TextField>
        </div>
        <button
          type="submit"
          className=" bg-[#dc143c] text-center text-slate-200 rounded-full font-palanquin font-medium text-lg px-6 py-4 mt-8 "
        >
          Add Event
        </button>
      </form>
    </div>
  );
};

export default MeetUpForm;
