import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <div className="h-screen flex items-center justify-center gap-6">
      <div className="max-w-lg mx-auto gap-y-6 flex-col items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            Welcome to Multi-Tenant Application Platform
          </h1>
          <p className="mb-6 font-semibold text-gray-700">
            Manage multiple organizations, users, and resources all in one
            place. Our platform provides secure isolation, customizable
            workflows, and seamless integration capabilities for your
            multi-tenant needs.
          </p>
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
