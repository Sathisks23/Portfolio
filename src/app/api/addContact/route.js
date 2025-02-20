import { NextResponse } from "next/server";
import { Connect } from "@/lib/mongodb";
import Contact from "@/models/Contact";

export async function POST(req) {
  try {
    await Connect();
    const contactData = await req.json();

    if (!contactData.name || !contactData.email || !contactData.message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const newContact = new Contact(contactData);
    await newContact.save();

    return NextResponse.json({ message: "Thanks for trusting me, I will get back to you soon..." });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
