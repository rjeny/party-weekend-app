import type { APIRoute } from "astro";
import type { Result } from '../../types/api/GetEvents';

import { db, Events, asc } from "astro:db";

export const GET: APIRoute = async (ctx) => {
  try {
    const result = [...(await db.select().from(Events).orderBy(asc(Events.startAt)).all()).values()].map(e => {
      return {
        ...e,
        startAt: e.startAt.toISOString(),
        endAt: e.endAt.toISOString(),
      }
    });

    return new Response(
      JSON.stringify({
        events: result,
      } satisfies Result),
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
