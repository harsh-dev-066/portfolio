import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    body: "",
  });
  const [info, setInfo] = useState({
    type: "",
    message: "",
  });
  const [disabled, setDisabled] = useState(false);

  const handelFormChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onFormSubmit = async (e) => {
    setDisabled(true);
    e.preventDefault();
    const body = new FormData(e.target);

    if (formData.name && formData.email && formData.body) {
      fetch("https://getform.io/f/bba2be2d-403a-49d1-8e16-aa19b1602ccf", {
        method: "POST",
        body,
        headers: {
          Accept: "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            setInfo({
              type: "faliure",
              message: "An error occured :(, please try again later.",
            });
            throw new Error(`An error occurred: ${response.statusText}`);
          }
          setFormData({
            name: "",
            email: "",
            body: "",
          });
          setInfo({
            type: "success",
            message: "Got your response :), will get back to you ASAP!",
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setInfo({
        type: "faliure",
        message: "Please fill all the details",
      });
    }
    setTimeout(() => {
      setInfo({
        type: "",
        message: "",
      });
      setDisabled(false);
    }, 3000);
  };

  return (
    <div
      name="contact"
      className="w-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
      style={{ paddingTop: "80px" }}
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-xl mx-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className=" flex justify-center items-center relative">
          <form
            className=" flex flex-col w-full md:w-1/2"
            onSubmit={onFormSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={formData.name}
              onChange={(e) => handelFormChange("name", e.target.value)}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={(e) => handelFormChange("email", e.target.value)}
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              value={formData.body}
              onChange={(e) => handelFormChange("body", e.target.value)}
            ></textarea>
            {info?.message?.length > 0 && (
              <div
                className={`form-info absolute w-fit my-1 ${
                  info?.type === "success" ? " text-green-400" : "text-red-500"
                }`}
              >
                {" "}
                {info?.message}{" "}
              </div>
            )}
            <button
              disabled={disabled}
              className={`text-white   px-6 py-3 my-8 mx-auto flex items-center rounded-md  ${
                disabled
                  ? "bg-slate-600 cursor-wait"
                  : "bg-gradient-to-b from-cyan-500 to-blue-500 hover:scale-110 duration-300"
              }`}
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
