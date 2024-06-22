import React, { useContext, useState } from "react";

export default function ResultCard(props) {
  const { username, email, age, isGuestGoing, guestname } = props.data;

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
          Name: <span className="ml-2 font-bold">{username}</span>
        </span>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
        <span className="text-white inline-flex">
          Email: <span className="ml-2 font-bold">{email}</span>
        </span>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
        <span className="text-white inline-flex">
          Age: <span className="ml-2 font-bold">{age}</span>
        </span>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
        <span className="text-white inline-flex">
          Are you attending with a guest?:
          <span className="ml-2 font-bold">{isGuestGoing}</span>
        </span>

        {isGuestGoing && (
          <>
            <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700" />
            <span className="text-white inline-flex">
              Guest name:
              <span className="ml-2 font-bold">{guestname}</span>
            </span>
          </>
        )}
      </div>
    </div>
  );
}
