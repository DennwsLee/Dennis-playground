import { NextResponse } from "next/server";
import Replicate from "replicate";
  const replicate= new Replicate({
    auth: process.env.REPLICATE_API_KEY,
  });

  export async function POST(
    req: Request
  ) {
    try {
        const body = await req.json();
        const { prompt } = body;

        if (!prompt) {
            return new NextResponse("Prompt are required", {status: 400})
        }

        const response = await replicate.run("stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b", { input: { prompt_a: prompt} });

        return NextResponse.json(response)
    } catch (error) {
        console.log("[MUSIC_ERROR]", error);
        return new NextResponse("Internal error", { status : 500});
    }
  }
