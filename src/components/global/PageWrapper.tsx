"use client";
import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Provider } from "react-redux";
import { store } from "@/app/store";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Provider store={store}>
        <Header /> {children} <Footer />
      </Provider>
    </div>
  );
};
