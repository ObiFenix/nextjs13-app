import { NextRequest, NextResponse } from "next/server";
import connect from "@src/utils/db";
import Post from "@src/models/Post";

export const GET = async (req: NextRequest) => {
  try {
    // Awaits for connection to mongo
    await connect();

    // Get all available posts in e_blog db from mongo
    const posts = await Post.find();

    console.log("posts: ", posts);
    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
