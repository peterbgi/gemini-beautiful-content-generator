import { db } from "./dbConfig";
import {eq, sql, desc} from 'drizzle-orm'
import { Users, Subscriptions, GeneratedContent} from "./schema";



export async function createOrUpdateUser(clerkUserId: string, email: string, name: string) {
    try {

        const [existingUser] = await db
        .select()
        .from(Users)
        .where(eq(Users.stripeCustomerId, clerkUserId))
        .limit(1)
        .execute();

        if (existingUser) {
            const [updateUser] = await db
            .update(Users)
            .set({ email, name })
            .where(eq(Users.stripeCustomerId, clerkUserId))
            .returning()
            .execute()
            console.log("Felhaználó frissítés", updateUser);
            return updateUser;

        }

        const [newUser] = await db 
        .insert(Users)
        .values({email, name, stripeCustomerId: clerkUserId, points: 50})
        .returning()
        .execute();
        console.log("Új felhasználó hozzáadva", newUser);

    }catch(error) {
        console.error('Hiba a felhasználó létrehozásában vagy frissítésében.');
        return null;
    }

}