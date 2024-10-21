import { z } from "zod";

const skillValidationSchema = z.object({
    name: z.string(),
    icon: z.string(),
    url: z.string()
});


const skillUpdateValidationSchema = z.object({
    name: z.string().optional(),
    icon: z.string().optional(),
    url: z.string().optional()
});


export const SkillValidation = {
    skillValidationSchema,
    skillUpdateValidationSchema
};