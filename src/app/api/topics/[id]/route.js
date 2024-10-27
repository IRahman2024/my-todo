import { NextResponse } from "next/server";

import Topic from "../../../../../models/topic";
import connectMongoDB from "../../../../../libs/mongodb";


export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, { title, description });
    return NextResponse.json({ message: "topic updated" }, { status: 200 });
}

export async function GET(request) {
    await connectMongoDB();

    const { searchParams } = new URL(request.url);
    const email = searchParams.get("email");

    if (!email) {
        return NextResponse.json({ error: "Email parameter is required" }, { status: 400 });
    }

    const topics = await Topic.find({ email });
    return NextResponse.json({ topics }, { status: 200 });
}