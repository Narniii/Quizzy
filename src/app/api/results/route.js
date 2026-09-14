export async function POST(request) {
  try {
    const body = await request.json();

    const { username, score } = body;

    if (!username) {
      return Response.json({ error: "Username is required" }, { status: 400 });
    }

    if (typeof score !== "number") {
      return Response.json(
        { error: "Score must be a number" },
        { status: 400 },
      );
    }

    console.log("Valid result:", {
      username,
      score,
    });

    return Response.json({
      message: "Result received successfully",
      result: {
        username,
        score,
      },
    });
  } catch (error) {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }
}
