import { Navbar } from "@/components/home/Navbar";
import { FC, PropsWithChildren } from "react";

const HomeLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="pt-16">{children}</main>
    </div>
  );
};

export default HomeLayout;
