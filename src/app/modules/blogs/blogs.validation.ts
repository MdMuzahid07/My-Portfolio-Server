import { z } from "zod";


const BlogValidationSchema = z.object({
    title: z.string(),
    thumbnail: z.string().optional(),
    texts: z.string()
});


const BlogUpdateValidationSchema = z.object({
    title: z.string().optional(),
    thumbnail: z.string().optional(),
    texts: z.string().optional()
});


export const BlogValidation = {
    BlogValidationSchema,
    BlogUpdateValidationSchema
};