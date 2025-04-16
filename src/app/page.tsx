import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center gap-6">
      <div className="max-w-lg mx-auto gap-y-6 flex-col items-center justify-center">
        <p className="mb-3 font-semibold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad accusamus
          maxime hic quam culpa, doloremque molestiae velit a ullam, magni
          eligendi. Eaque odio sit vel corporis soluta nostrum sapiente quidem.
        </p>
        <Button>Click me</Button>
      </div>
    </div>
  );
};

export default Home;
