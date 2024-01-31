import React from "react";
import { Container } from "./Container";
import { Inputfield } from "./Inputfield";
import { Trending } from "./Trending";
import { Feed } from "./Feed";

export const RightSection = () => {
  return (
    <Container className="py-2 absolute right-10 w-[28%] ">
          <Inputfield />
          <Feed />
          <Trending />
    </Container>
  );
};
