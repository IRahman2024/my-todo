// import Topic from "@/models/topic";
import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Topic from "../../../../models/topic";

export async function POST(request){
    const {title, description, email} = await request.json();
    await connectMongoDB();
    // await TopicMongoDB();
    await Topic.create({title, description, email});
    return NextResponse.json({message: "topic created"}, {status: 201});
}

export async function GET(request){
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({topics});
}

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message: "topic deleted"}, {status: 200});
}