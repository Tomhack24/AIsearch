"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { getAllPlots } from "../../lib/supabaseFunction";
import PlotsList from "@/components/plots/PlotsList";
import Search from "@/components/search/Search";


export default  function Home() {

  const [plots,setPlots] = useState<any>([]);

  useEffect(() => {
    const getPlots = async() => {
      const plots = await getAllPlots();
      setPlots(plots);
    }
    getPlots();
  },[])

  return (

    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h3 className="text-center text-4xl mb-10">AI 検索</h3>
      <div>
        <Search plots={plots}/>
      </div>
      <div className="w-full flex justify-center">
        <PlotsList plots = {plots}/>
      </div>
    </main>
  );
}
