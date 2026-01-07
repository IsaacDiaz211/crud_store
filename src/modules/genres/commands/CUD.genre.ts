import db from "../../../db/db";
import { eq } from "drizzle-orm";
import { genres } from "../genre.schema";
import type { NewGenre, Genre } from "../genre.schema"

async function CreateGenre(data: NewGenre): Promise<void> {
    db.insert(genres).values(data);
}

async function UpdateGenre(data: Genre) {
    await db.update(genres).set(data).where(eq(genres.id, data.id))
}

async function DeleteGenre(id_genre: number) {
    await db.delete(genres).where(eq(genres.id, id_genre))
}

export { CreateGenre, UpdateGenre, DeleteGenre }
