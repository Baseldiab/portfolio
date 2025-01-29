'use server'
import { cookies } from 'next/headers'

export async function setCookie() {
    const cookieStore = await cookies();
    cookieStore.set("hasVisited", "true", {
        maxAge: 60 * 60 * 24 * 30, // 30 days
      });
}
