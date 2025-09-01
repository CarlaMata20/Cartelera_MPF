import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import { modelo } from "@/models/schema";

export async function GET()
{

    try{
        await connectDB();
        const elementos = await modelo.find({}, {editable: 0, __v: 0, _id: 0});
        return NextResponse.json(elementos);

    }catch(err)
    {
        return NextResponse.json({"mensaje": "Error: ", err});        
    }

}