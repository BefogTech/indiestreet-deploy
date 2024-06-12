/** @format */

import { cn } from "@/lib/utils";
import React from "react";1

export default function StylishHeader({ title, className }) {
  return <h1 className={cn("text-3xl font-medium mb-8 uppercase tracking-wider text-[#CDF520] h-max", className)}>{title}</h1>;
}
