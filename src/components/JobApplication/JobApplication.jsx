import React, { useState, useEffect } from "react";
import isURL from "validator/lib/isURL";

function JobApplication() {
  // state variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState(0);
  const [portfolioURL, setPortfolioURL] = useState("");
  const [managementExp, setManagementExp] = useState("");
  const [additionalSkills, setAdditionalSkills] = useState("");
  const [interviewTime, setInterviewTime] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showCard, setShowcard] = useState(false);
  const [userData, setUserData] = useState({});

  // handle select position
  const positions = ["Developer", "Designer", "Manager"];
  const handlePositionSelect = (e) => {
    setPosition(e.target.value);
  };

  // check portfolio link validation
  const urlValidation = (e) => {
    setPortfolioURL(e.target.value);
    if (isURL(portfolioURL)) {
      setErrorMsg("Valid URL");
    } else {
      setError(true);
      setErrorMsg("Invalid URL");
    }
  };
  //form validation
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length < 1) {
      setError(true);
      setErrorMsg("Enter Your Name Correctly");
      return;
    }
    if (email.length < 1) {
      setError(true);
      setErrorMsg("Enter Your Email Correctly");
      return;
    }
    if (phone.length != 10) {
      setError(true);
      setErrorMsg("Enter Your Phone Number Correctly");
      return;
    }
    if (
      position != "Developer" &&
      position != "Designer" &&
      position != "Manager"
    ) {
      console.log(position);
      setError(true);
      setErrorMsg("Select Position Correctly");
      return;
    }
    if (experience > 0) {
      setError(true);
      setErrorMsg("Experince should be greater than 0");
      return;
    }
    if (position == "Designer" && portfolioURL.length < 1) {
      setError(true);
      setErrorMsg("Enter Your Portfolio URL Correctly");
      return;
    }
    if (position == "Manager" && managementExp > 0) {
      setError(true);
      setErrorMsg("Enter Your Management Experience Correctly");
      return;
    }
    console.log(
      "error",
      errorMsg,
      name,
      email,
      phone,
      position,
      experience,
      portfolioURL,
      managementExp,
      additionalSkills,
      interviewTime
    );
  };

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(false);
      }, 4000);
    }
  }, [error]);

  if (showCard) {
    return (
      <div className="z-50 absolute block w-2/4 h-3/5 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <svg
          className="w-[21px] h-[21px] text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          // onClick={() => {
          //   closeDataCard();
          // }}
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.2"
            d="M6 18 17.94 6M18 18 6.06 6"
          />
        </svg>

        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          Event User Registration Data
        </h5>
        <div className="block">
          <span className="text-white inline-flex">
            Name: <span className="ml-2 font-bold">frf</span>
          </span>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="text-white inline-flex">
            Email: <span className="ml-2 font-bold">frf</span>
          </span>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="text-white inline-flex">
            Age: <span className="ml-2 font-bold">frf</span>
          </span>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="text-white inline-flex">
            Are you attending with a guest?:
            <span className="ml-2 font-bold">rf</span>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col w-3/5">
        {error && (
          <div
            className="mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 z-50 absolute"
            role="alert"
            style={{ marginTop: "3rem" }}
          >
            <span className="font-medium">Alert!</span> {errorMsg}
          </div>
        )}

        <form className="w-3/5 mx-auto mt-20">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Your Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Biswajit Debnath"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="youremail@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Your Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="9876543210"
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="small"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Appying for Position
            </label>
            <select
              id="small"
              className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handlePositionSelect}
              required
            >
              <option>Choose a Position</option>
              {positions.map((positionOptions, index) => {
                return <option key={index}>{positionOptions}</option>;
              })}
            </select>
          </div>

          {/* showing experience input if position is developer or designer */}
          {(position == "Developer" || position == "Designer") && (
            <div className="mb-5">
              <label
                htmlFor="experience"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Relevant Experience
              </label>
              <input
                type="num"
                id="experience"
                min="0"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="Number of Years"
                required
              />
            </div>
          )}

          {position == "Designer" && (
            <div className="mb-5">
              <label
                htmlFor="portfolio"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Portfolio URL
              </label>
              <input
                type="text"
                id="portfolio"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                value={portfolioURL}
                onChange={urlValidation}
                placeholder="https://www.yourportfolio.com"
                required
              />
            </div>
          )}

          {position == "Manager" && (
            <div className="mb-5">
              <label
                htmlFor="management"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Management Experience
              </label>
              <input
                type="num"
                id="management"
                min="0"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                value={managementExp}
                onChange={(e) => setManagementExp(e.target.value)}
                placeholder="Management Experince"
                required
              />
            </div>
          )}

          <div className="mb-5">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Additional Skills
            </label>
            <div className="flex flex-wrap mb-5">
              <div className="flex items-center me-4">
                <input
                  id="inline-radio"
                  type="radio"
                  value=""
                  onChange={() => setAdditionalSkills("javascript")}
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  checked
                />
                <label
                  htmlFor="inline-radio"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  JavaScript
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="inline-2-radio"
                  type="radio"
                  value=""
                  onChange={() => setAdditionalSkills("css")}
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="inline-2-radio"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  CSS
                </label>
              </div>

              <div className="flex items-center me-4">
                <input
                  id="inline-2-radio"
                  type="radio"
                  value=""
                  onChange={() => setAdditionalSkills("python")}
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  htmlFor="inline-2-radio"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Python
                </label>
              </div>
            </div>
          </div>

          <div className="mb-5">
            <label
              htmlFor="datetime"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Preffered Interview Time
            </label>

            <div className="relative max-w-sm">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
              </div>
              <input
                type="datetime-local"
                value={interviewTime}
                onChange={(e) => setInterviewTime(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Select date"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default JobApplication;
