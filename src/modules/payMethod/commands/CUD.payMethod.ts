import db from "../../../db/db";
import { eq } from "drizzle-orm";
import { payMethods } from "../payMethod.schema";
import type { NewPayMethod, PayMethod } from "../payMethod.schema"

async function CreatePayMethod(data: NewPayMethod): Promise<void> {
    db.insert(payMethods).values(data);
}

async function UpdatePayMethod(data: PayMethod) {
    await db.update(payMethods).set(data).where(eq(payMethods.id, data.id))
}

async function DeletePayMethod(id_payMethod: number) {
    await db.delete(payMethods).where(eq(payMethods.id, id_payMethod))
}

export { CreatePayMethod, UpdatePayMethod, DeletePayMethod }
