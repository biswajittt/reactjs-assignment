import React, { useState, useEffect } from "react";
import isURL from "validator/lib/isURL";

function JobApplication() {
  // state variables
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [position, setPosition] = useState("");
  const [relevantExperience, setRelevantExperience] = useState("");
  const [portfolioURL, setPortfolioURL] = useState("");
  const [managementExp, setManagementExp] = useState("");
  const [additionalSkills, setAdditionalSkills] = useState({
    languages: [],
    response: [],
  });
  const [interviewDateTime, setInterviewDateTime] = useState("");
  const [interviewDate, setInterviewDate] = useState("");
  const [interviewTime, setInterviewTime] = useState("");
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [showCard, setShowcard] = useState(false);
  // const [userData, setUserData] = useState({});

  // validate full name
  const validateFullName = (username) => {
    let namePattern = /^[a-zA-Z\s-]+$/;

    if (!username || !namePattern.test(username)) {
      return false;
    }
    return true;
  };
  // handle select position
  const positions = ["Developer", "Designer", "Manager"];
  const handlePositionSelect = (e) => {
    setPosition(e.target.value);
  };

  // handle checkbox
  const handleAdditionalSkills = (e) => {
    // Destructuring
    const { value, checked } = e.target;
    const { languages } = additionalSkills;

    // console.log(`${value} is ${checked}`);

    // Case 1 : The user checks the box
    if (checked) {
      setAdditionalSkills({
        languages: [...languages, value],
        response: [...languages, value],
      });
    }

    // Case 2  : The user unchecks the box
    else {
      setAdditionalSkills({
        languages: languages.filter((e) => e !== value),
        response: languages.filter((e) => e !== value),
      });
    }
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
  //handle close card
  const handleCloseCard = () => {
    setShowcard(false);
    setName("");
    setEmail("");
    setPhone("");
    setPosition("");
    setRelevantExperience("");
    setPortfolioURL("");
    setManagementExp("");
    setAdditionalSkills("");
    setInterviewDateTime("");
    setInterviewDate("");
    setInterviewTime("");
  };
  //form validation
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(additionalSkills.languages);
    if (!validateFullName(name)) {
      setError(true);
      setErrorMsg("Enter Your Full Name Correctly");
      return;
    }
    if (email.length < 1) {
      setError(true);
      setErrorMsg("Enter Your Email Correctly");
      return;
    }
    if (phone.length != 10) {
      setError(true);
      setErrorMsg("Enter Your Phone Number Correctly. Ex: 7543902615");
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
    if (
      !isNaN(relevantExperience) &&
      relevantExperience.length == 0 &&
      relevantExperience == "0"
    ) {
      setError(true);
      setErrorMsg("Experince should be greater than 0");
      return;
    }
    if (position == "Designer" && portfolioURL.length < 1) {
      setError(true);
      setErrorMsg("Enter Your Portfolio URL Correctly");
      return;
    }
    if (position == "Manager" && managementExp.length < 5) {
      setError(true);
      setErrorMsg("Enter Your Management Experience Correctly");
      return;
    }
    if (
      additionalSkills.languages[0] != "JavaScript" &&
      additionalSkills.languages[1] != "CSS" &&
      additionalSkills.languages[2] != "Python"
    ) {
      setError(true);
      setErrorMsg("Choose Aditional Skills Correctly");
      return;
    }
    if (interviewDateTime.length == 0) {
      setError(true);
      setErrorMsg("Select Preferred Interview Time Correctly");
      return;
    } else {
      const splittedInterviwDateTime = interviewDateTime.split(/[T]/);
      setInterviewDate(splittedInterviwDateTime[0]);

      // \\convert time
      let time = splittedInterviwDateTime[1];
      var ts = time;
      var H = +ts.substr(0, 2);
      var h = H % 12 || 12;
      h = h < 10 ? "0" + h : h;
      var ampm = H < 12 ? " AM" : " PM";
      ts = h + ts.substr(2, 3) + ampm;
      setInterviewTime(ts);
      console.log(ts);
    }

    // check error, show card if no error
    if (!error) {
      setShowcard(true);
    }
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
          onClick={() => {
            handleCloseCard();
          }}
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
          Job Application Data
        </h5>
        <div className="block">
          <span className="text-white inline-flex">
            Name: <span className="ml-2 font-bold">{name}</span>
          </span>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="text-white inline-flex">
            Email: <span className="ml-2 font-bold">{email}</span>
          </span>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="text-white inline-flex">
            Phone Number: <span className="ml-2 font-bold">{phone}</span>
          </span>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="text-white inline-flex">
            Position: <span className="ml-2 font-bold">{position}</span>
          </span>

          {(position == "Developer" || position == "Designer") && (
            <>
              <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="text-white inline-flex">
                Relevant Experience:
                <span className="ml-2 font-bold">{relevantExperience}</span>
              </span>
            </>
          )}

          {position == "Designer" && (
            <>
              <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="text-white inline-flex">
                Portfolio URL:{" "}
                <span className="ml-2 font-bold">{portfolioURL}</span>
              </span>
            </>
          )}

          {position == "Manager" && (
            <>
              <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="text-white inline-flex">
                Management Experience:{" "}
                <span className="ml-2 font-bold">{managementExp}</span>
              </span>
            </>
          )}
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="text-white inline-flex">
            Additional Skills:
            <span className="ml-2 font-bold">
              {additionalSkills.languages.map((value, index) => {
                return <span key={index}>{value + " "}</span>;
              })}
            </span>
          </span>

          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="text-white inline-flex">
            Preferred Interview Time:
            <span className="ml-2 font-bold">
              {interviewDate},{interviewTime}
            </span>
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
                placeholder="Number of Years"
                value={relevantExperience}
                onChange={(e) => setRelevantExperience(e.target.value)}
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
                type="text"
                id="management"
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
              htmlFor="additional-skills"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Additional Skills
            </label>
            <div className="flex flex-wrap mb-5">
              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="vue-checkbox-list"
                      type="checkbox"
                      value="JavaScript"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      onChange={handleAdditionalSkills}
                    />
                    <label
                      htmlFor="vue-checkbox-list"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      JavaScript
                    </label>
                  </div>
                </li>
                <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="react-checkbox-list"
                      type="checkbox"
                      value="CSS"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      onChange={handleAdditionalSkills}
                    />
                    <label
                      htmlFor="react-checkbox-list"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      CSS
                    </label>
                  </div>
                </li>
                <li className="w-full dark:border-gray-600">
                  <div className="flex items-center ps-3">
                    <input
                      id="laravel-checkbox-list"
                      type="checkbox"
                      value="Python"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                      onChange={handleAdditionalSkills}
                    />
                    <label
                      htmlFor="laravel-checkbox-list"
                      className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Python
                    </label>
                  </div>
                </li>
              </ul>
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
                value={interviewDateTime}
                onChange={(e) => setInterviewDateTime(e.target.value)}
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
