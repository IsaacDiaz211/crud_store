import db from "../../../db/db";
import { eq } from "drizzle-orm";
import { payMethods } from "../payMethod.schema";
import type { PayMethod } from "../payMethod.schema"

async function getPayMethods(): Promise<PayMethod[]> {
    return await db.select().from(payMethods);
}

async function getPayMethod(id_payMethod: number): Promise<PayMethod | null> {
    let response = await db.select().from(payMethods).where(eq(payMethods.id, id_payMethod))
    return response[0];
}

export { getPayMethods, getPayMethod }
