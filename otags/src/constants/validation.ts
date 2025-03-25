"use client";

import { z } from "zod";

export const formSchema = (type: string) =>
  z.object({
    firstName: type === "SIGN_IN" ? z.string().optional() : z.string(),
    lastName: type === "SIGN_IN" ? z.string().optional() : z.string(),
    phone: type === "SIGN_IN" ? z.string().optional() : z.string(),
    email: z.string().email(),
    password: z.string().min(8, {
      message: "Password must be at least 8 characters",
    }),
  });
