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
      <h3 className="mt-50 text-center text-4xl mb-10 hover:text-gray-600 hover:border-b-1 duration-200">
        <a href="https://a-isearch-2rxk.vercel.app/">Find My Ai</a>
      </h3>
      <FavoriteManager plots={plots}/>
    </main>
  );
}
