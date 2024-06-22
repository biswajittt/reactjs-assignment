import { useContext, useState, useEffect } from "react";
import ResultCard from "./ResultCard";

function EventRegistration() {
  // form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState(0);
  const [isGuestGoing, setIsGuestGoing] = useState("No");
  const [guestname, setGuestName] = useState("");
  const [userData, setUserData] = useState({});
  const [showCard, setShowcard] = useState(false);
  const [error, setError] = useState(false);

  const closeDataCard = () => {
    setName("");
    setEmail("");
    setAge(0);
    setIsGuestGoing("No");
    setGuestName("");
    setUserData({});
    setShowcard(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      (name.length > 0 &&
        email.length > 0 &&
        age > 0 &&
        isGuestGoing == "No") ||
      (name.length > 0 &&
        email.length > 0 &&
        age > 0 &&
        isGuestGoing == "Yes" &&
        guestname.length > 0)
    ) {
      setUserData({ name, email, age, isGuestGoing, guestname });
      setShowcard(true);
    } else {
      setError(true);
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
            closeDataCard();
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
          Event User Registration Data
        </h5>
        <div className="block">
          <span className="text-white inline-flex">
            Name: <span className="ml-2 font-bold">{userData.name}</span>
          </span>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="text-white inline-flex">
            Email: <span className="ml-2 font-bold">{userData.email}</span>
          </span>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="text-white inline-flex">
            Age: <span className="ml-2 font-bold">{userData.age}</span>
          </span>
          <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
          <span className="text-white inline-flex">
            Are you attending with a guest?:
            <span className="ml-2 font-bold">{userData.isGuestGoing}</span>
          </span>

          {userData.isGuestGoing == "Yes" && (
            <>
              <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
              <span className="text-white inline-flex">
                Guest name:
                <span className="ml-2 font-bold">{userData.guestname}</span>
              </span>
            </>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col">
        {error && (
          <div
            className="mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 z-50 absolute"
            role="alert"
            style={{ marginTop: "-3rem" }}
          >
            <span className="font-medium">Alert!</span> Please fill the form
            correctly
          </div>
        )}
        <form className="max-w-sm mx-auto ">
          <div className="mb-5">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter your name
            </label>
            <input
              type="text"
              id="name"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="Biswajit Debnath"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter your email
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
              htmlFor="age"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter your age
            </label>
            <input
              type="number"
              id="age"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              value={age}
              min="1"
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>

          {isGuestGoing == "Yes" && (
            <div className="mb-5">
              <label
                htmlFor="guestname"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter guest name
              </label>
              <input
                type="text"
                id="guestname"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
                placeholder="Guest Name"
                value={guestname}
                onChange={(e) => setGuestName(e.target.value)}
              />
            </div>
          )}

          <div className="mb-5">
            <label
              htmlFor="repeat-password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Are you attending with a guest?
            </label>
            <div className="flex flex-wrap mb-5">
              <div className="flex items-center me-4">
                <input
                  id="inline-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  onChange={() => setIsGuestGoing("Yes")}
                />
                <label
                  htmlFor="inline-radio"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Yes
                </label>
              </div>
              <div className="flex items-center me-4">
                <input
                  id="inline-2-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  onChange={() => setIsGuestGoing("No")}
                  checked
                />
                <label
                  htmlFor="inline-2-radio"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  No
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default EventRegistration;
