import { Connect } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        await Connect()
        const contact = await req.json()
        const addContact = Contact(contact)
        await addContact.save()
        return NextResponse.json({message:'Thanks for trusting me ,I will get you soon...'})
    } catch (error) {         
        return NextResponse.json({error:error.message})
    }
}