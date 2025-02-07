import * as z from "zod";

export const contactFormSchema = z.object({
  title: z.string().min(3, {
    message: "Title must be at least 3 characters"
  }),
  email: z.string().email({
    message: "Please enter a valid email address"
  }),
  description: z.string().superRefine((val, ctx) => {
    if (val.length > 0 && val.length < 3) {
      ctx.addIssue({
        code: z.ZodIssueCode.too_small,
        minimum: 3,
        type: "string",
        inclusive: true,
        message: "Description must be at least 3 characters if not empty",
      });
    }
  }).optional(),
});
