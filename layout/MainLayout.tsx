import { Header } from "@/components/Header";
import React, { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-w-full h-screen">
      <Header />
      <div className="min-h-screen">{children}</div>
    </div>
  );
};
