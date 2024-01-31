import React, { forwardRef } from "react";

export const Button =forwardRef(
  (props,ref) => {
    return (
      <button
        type="button"
        ref={ref}
        onClick={props.onClick}
        className="text-white w-[80px] bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[30px] text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        Post
      </button>
    );
  }
)
