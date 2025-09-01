import { modelo } from "@/models/schema";
import { connectDB } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function GET(_req, { params } )
{
    const id = params.id;
    
    try {
        //conexion db.
        await connectDB();
        //busco id en DB.
        const cartelera = await modelo.findById(id);
        return new NextResponse(cartelera.html);
    }catch(err)
    {
        return NextResponse.json({"mensaje" : "error", err});
    }

}