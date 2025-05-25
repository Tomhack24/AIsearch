"use client"

import { useEffect, useState } from "react";
import { getAllPlots } from "../../lib/supabaseFunction";

import { Plot } from "@/types";

import FavoriteManager from "@/components/FavoriteManager";


export default function Home() {

  const [plots, setPlots] = useState<Plot[]>([]);

  useEffect(() => {
    const getPlots = async () => {
      const plots = await getAllPlots();
      setPlots(plots ?? []);
    };
    getPlots();
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1
         className="mt-50 text-center text-5xl sm:text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-blue-600 via-sky-500 to-indigo-600 bg-clip-text text-transparent drop-shadow-lg mb-16 pb-6">
         FindMyAI</h1>
      <FavoriteManager plots={plots}/>
    </main>
  );
}
