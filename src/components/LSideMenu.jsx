import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import { faHashtag } from "@fortawesome/free-solid-svg-icons";
export const LSideMenu = ({ Content_Icon }) => {
  return Content_Icon.map((item, idx) => {
    return (
      <div
        key={idx}
        className=" hover:bg-slate-300  cursor-pointer pl-2 text-black py-3 rounded-[30px] w-[70%] font-sans flex items-center gap-5"
      >
        <FontAwesomeIcon className="size-6" icon={item.Icon} />

        {/* <img src={"./Group.png"} alt="" /> */}
        <div className="text-xl fon">{item.Content}</div>
      </div>
    );
  });
};
