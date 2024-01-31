import { useState } from "react";
import { LSideMenu } from "./components/LSideMenu";

// import "./App.css";
import { PostContainer } from "./components/PostContainer";
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
import { Posrcreate } from "./components/Posrcreate";
import { Feed } from "./components/Feed";
import { Trending } from "./components/Trending";
import { Postskeleton } from "./components/postskeleton";
import { Inputfield } from "./components/Inputfield";
import { Post } from "./components/Post";
import { CreatePost } from "./components/CreatePost";

function App() {
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
  const img = [
    "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1303502/pexels-photo-1303502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1319750/pexels-photo-1319750.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/460621/pexels-photo-460621.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];
  const [set, setstate] = useState(false);

  setTimeout(() => {
    setstate(true);
  }, 3000);

  return (
    <>
      <div className="width-full h-screen bg-white ">
        <div className="relative w-[90%] mx-auto flex space-y-2 h-screen px-2 space-x-1 py-2">
          <div className="fixed left-12 p-8 lg:w-[20%] md:w-[3%] sm:absolute border border-black-900">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="w-9 mb-2 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-18jsvk2 r-16y2uox r-8kz0gk"
            >
              <g>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </g>
            </svg>
            <LSideMenu Content_Icon={Content_Icon} />
            <div className="flex justify-start py-2">
              <button
                type="button"
                className="w-[90%] h-14 font-sans text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-[40px] text-lg px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Post
              </button>
            </div>
          </div>
          <div className=" w-[47%] relative left-[22%] flex justify-center">
            <div className="w-full flex flex-col items-center p-4">
              <CreatePost/>
              {img.map((img, ind) => {
                return set ? (
                  <Post key={ind} image={img} />
                ) : (
                  <Postskeleton key={ind} />
                );
              })}
            </div>
          </div>
          <div className="py-2 absolute right-10 w-[28%] ">
            <Inputfield/>
            <Feed />
            <Trending />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
