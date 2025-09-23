import type { APIRoute } from "astro";

import { db, Events, asc } from "astro:db";

export const GET: APIRoute = async (ctx) => {
  try {
    const result = [...(await db.select().from(Events).orderBy(asc(Events.startAt)).all()).values()];

    return new Response(
      JSON.stringify({
        events: result,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (e) {
    console.log(e);
    return new Response(
      JSON.stringify({
        error: "Something wents wrong",
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
