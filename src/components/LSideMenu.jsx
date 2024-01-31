import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icon } from "@fortawesome/fontawesome-svg-core";
import {
  faHashtag,
  faBell,
  faMagnifyingGlass,
  faMessage,
  faBookmark,
  faList,
  faUser,
  faUsers,
  faX,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
export const LSideMenu = () => {
  const Content_Icon = [
    {
      Content: "Home",
      Icon: faHashtag,
    },
    {
      Content: "Explore",
      Icon: faMagnifyingGlass,
    },
    {
      Content: "Notifications",
      Icon: faBell,
    },
    {
      Content: "Messages",
      Icon: faMessage,
    },
    {
      Content: "Bookmarks",
      Icon: faBookmark,
    },
    {
      Content: "Lists",
      Icon: faList,
    },
    {
      Content: "Profile",
      Icon: faUser,
    },
    {
      Content: "Communities",
      Icon: faUsers,
    },
    {
      Content: "Premium",
      Icon: faX,
    },
    {
      Content: "More",
      Icon: faEllipsis,
    },
  ];
 
  return Content_Icon.map((item, idx) => {
    return (
      <div
        key={idx}
        className=" w-auto hover:bg-slate-300  cursor-pointer pl-2 text-black py-3 rounded-[30px] font-sans flex  items-center gap-5"
      >
        <FontAwesomeIcon className="size-6" icon={item.Icon} />
        <div className="text-xl fon">{item.Content}</div>
      </div>
    );
  });
};
