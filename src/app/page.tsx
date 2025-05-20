"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import { getAllPlots } from "../../lib/supabaseFunction";
import PlotsList from "@/components/plots/PlotsList";


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

    <div className="items-center justify-items-center min-h-screen justify-center font-[family-name:var(--font-geist-sans)]">

      <PlotsList plots = {plots}/>
    </div>
  );
}
