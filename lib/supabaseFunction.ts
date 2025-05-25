import { supabase } from "./supabase";

export const getAllPlots = async() => {
    const plots = await supabase.from("AIplots").select('*');
    
    return plots.data;
}