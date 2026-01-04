import { motion } from "motion/react";
import { ReactNode } from "react";
import Headline from "./Headline";
import { cn } from "@/lib/utils";

interface ContentLayoutProps {
  children: ReactNode;
  title: string;
  subline1: string;
  subline2: string;
  contentInContaienr?: boolean;
}

const ContentLayout = ({
  children,
  title,
  subline1,
  subline2,
  contentInContaienr = true,
}: ContentLayoutProps) => {
  return (
    <div className="pt-12">
      <div className="container px-8 mx-auto">
        <Headline title={title} subline1={subline1} subline2={subline2} />
      </div>
      <div className={cn(contentInContaienr ? "container px-8 mx-auto" : "")}>
        {children}
      </div>
    </div>
  );
};

export default ContentLayout;
