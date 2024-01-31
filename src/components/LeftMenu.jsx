import React from "react";
import { Container } from "./Container";
import { Icon } from "./Icon";
import { LSideMenu } from "./LSideMenu";
import { Button } from "./Button";

export const LeftSection = () => {
  return (
    <Container className=" fixed left-12 p-8 lg:w-[20%] md:w-[3%] sm:absolute border border-black-900">
      <Icon />
      <LSideMenu />
      <div>
        <Button className="mt-2 w-[90%] font-bold" />
      </div>
    </Container>
  );
};
