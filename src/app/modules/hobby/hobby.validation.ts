import { z } from "zod";

const hobbyValidationSchema = z.object({
    name: z.string(),
    icon: z.string(),
});


const hobbyUpdateValidationSchema = z.object({
    name: z.string().optional(),
    icon: z.string().optional(),
});


export const HobbyValidation = {
    hobbyValidationSchema,
    hobbyUpdateValidationSchema
};