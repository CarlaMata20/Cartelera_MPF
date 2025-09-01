import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import { modelo } from "@/models/schema";

export async function GET()
{
    try{
        await connectDB();
        const arrID = await modelo.find({}, {_id: 1});
        return NextResponse.json(arrID);

    }catch(err)
    {
        return NextResponse.json({"mensaje": "Error", err});
    }
}