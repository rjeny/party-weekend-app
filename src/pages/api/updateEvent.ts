import type { APIRoute } from "astro";
import type { Body, Result } from '../../types/api/UpdateEvent';

import { db, eq, Events, isDbError } from "astro:db";

export const POST: APIRoute = async (ctx) => {
  try {
    const body = await ctx.request.json() as Body

    if (!body.id) {
      return new Response(
        JSON.stringify({
          error: "No id",
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    await db.update(Events).set({
      startAt: new Date(body.startAt),
      endAt: new Date(body.endAt),
    }).where(eq(Events.id, body.id));

    return new Response(
      JSON.stringify({
        done: true,
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
