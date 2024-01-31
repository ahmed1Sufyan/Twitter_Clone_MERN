import { useState } from "react";
import { LSideMenu } from "./components/LSideMenu";
import { Posrcreate } from "./components/Posrcreate";
import { Feed } from "./components/Feed";
import { Trending } from "./components/Trending";
import { Postskeleton } from "./components/postskeleton";
import { Inputfield } from "./components/Inputfield";
import { Post } from "./components/Post";
import { CreatePost } from "./components/CreatePost";
import { Icon } from "./components/Icon";
import { Container } from "./components/Container";
import { Button } from "./components/Button";
import { Allpost } from "./components/Allpost";
import { LeftSection } from "./components/LeftMenu";
import { MiddleSection } from "./components/MiddleSection";
import { RightSection } from "./components/RightSection";
import {Outlet} from "react-router-dom"

function App() {
  const [set, setstate] = useState(true);
  return (
    <>
      <Container className="w-full h-screen bg-white ">
        <div className="relative w-[90%] mx-auto flex space-y-2 h-screen px-2 space-x-1 py-2">
          <LeftSection/>
          <Outlet />
          <RightSection /> 
        </div>
      </Container >
    </>
  );
}

export default App;
