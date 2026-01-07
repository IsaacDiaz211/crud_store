import db from "../../../db/db";
import { eq } from "drizzle-orm";
import { genres } from "../genre.schema";
import type { Genre } from "../genre.schema"

async function getGenres(): Promise<Genre[]> {
    return await db.select().from(genres);
}

async function getGenre(id_genre: number): Promise<Genre | null> {
    let response = await db.select().from(genres).where(eq(genres.id, id_genre))
    return response[0];
}

export { getGenres, getGenre }
