import React from "react";
import { Premium } from "./Premium";

export const Post = ({image}) => {
  return (
    <div className="mt-2 flex space-x-5 border border-gray-300 rounded-[10px] p-4">
      <div>
        <img
          className="w-12 h-9 rounded-full "
          src={image}
          alt="Rounded avatar"
        />
      </div>
      <div>
        <div className="space-x-1 font-sans font-light ">
          <span className="font-bold ">PTI</span>
            <span>
            <Premium/>
            </span>
          <span>@PTIofficial</span>
          <span>3h</span>
        </div>
        <div className="content mt-4">
          چئیرمین پاکستان تحریک انصاف بیرسٹر گوہر علی خان کی اڈیالہ جیل کے باہر
          میڈیا سے گفتگو۔
        </div>
        <div className="mt-4">
          <img
            className="h-auto max-w-lg rounded-lg"
            src={image}
            alt="image description"
          />
        </div>
        <div className="like flex justify-around mt-5">
          <div>123</div>
          <div>3.4k</div>
          <div>8.9k</div>
          <div>share</div>
        </div>
      </div>
    </div>
  );
};
