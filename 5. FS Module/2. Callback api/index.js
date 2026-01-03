import { error } from "console"
import * as fs from "fs"

fs.mkdir("c:\\node",error=>{
    if (error) throw error;
    console.log("Directory Created...")
})