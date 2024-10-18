"use client";
import { SignedIn } from "@clerk/nextjs";
import React, { useState } from "react";
import Barchart1 from "/home/kunal/Documents/CognitiveBerg/app/dashboard/charts/Barchart1.jsx";

const Page = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Barchart1></Barchart1>
    </div>
  );
};

export default Page;
