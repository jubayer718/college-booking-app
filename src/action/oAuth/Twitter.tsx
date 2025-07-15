"use server";

import { signIn } from "next-auth/react";

export async function twitterSignIn() {
  await signIn("twitter");
}
