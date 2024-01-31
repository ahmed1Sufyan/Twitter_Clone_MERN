import React, { useState } from "react";
import { Postskeleton } from "./postskeleton";
import { Post } from "./Post";

export const Allpost = () => {
  const img = [
      "https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1303502/pexels-photo-1303502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1303502/pexels-photo-1303502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1319750/pexels-photo-1319750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const [set, setstate] = useState(false);

  setTimeout(() => {
    setstate(true);
  }, 2000);

  return (
    <div className="w-full">
      {img?.map((img, ind) => {
        return set ? (
          <Post key={ind} image={img} />
        ) : (
          <Postskeleton key={ind} />
        );
      })}
    </div>
  );
};
