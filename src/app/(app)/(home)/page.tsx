import { WelcomeHeader } from "@/components/home/WelcomeHeader";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center gap-6">
      <div className="max-w-lg mx-auto gap-y-6 flex-col items-center justify-center">
        <div className="text-center">
          <WelcomeHeader />
          <div className="space-x-4">
            <Button variant="default">Get Started</Button>
            <Button variant="neutral">Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
