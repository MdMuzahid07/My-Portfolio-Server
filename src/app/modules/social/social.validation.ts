import { z } from "zod";

const socialValidationSchema = z.object({
    name: z.string(),
    icon: z.string(),
    url: z.string()
});


const socialUpdateValidationSchema = z.object({
    name: z.string().optional(),
    icon: z.string().optional(),
    url: z.string().optional()
});


export const SocialValidation = {
    socialValidationSchema,
    socialUpdateValidationSchema
};