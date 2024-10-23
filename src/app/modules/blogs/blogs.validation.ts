import { z } from "zod";


const BlogValidationSchema = z.object({
    thumbnail: z.string(),
    texts: z.string()
});


const BlogUpdateValidationSchema = z.object({
    thumbnail: z.string().optional(),
    texts: z.string().optional()
});


export const BlogValidation = {
    BlogValidationSchema,
    BlogUpdateValidationSchema
};