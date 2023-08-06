import { NextRequest, NextResponse } from "next/server";
import connect from "@src/utils/db";
import Post from "@src/models/Post";

export const GET = async (req: NextRequest, { params }: any) => {
  try {
    // Awaits for connection to mongo
    await connect();

    // Get post record matching given id in the e_blog db from mongo
    const post = await Post.findById(params?.id);

    console.log("post: ", post);
    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Database Error", { status: 500 });
  }
};
