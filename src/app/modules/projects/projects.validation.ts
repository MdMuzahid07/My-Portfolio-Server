import { z } from "zod";

const projectValidationSchema = z.object({
    name: z.string(),
    coreTechs: z.array(z.string()),
    usedTechnologies: z.array(z.string()),
    thumbnailImg: z.string().optional(),
    feature_1: z.object({
        heading: z.string(),
        detail: z.string(),
        image: z.string(),
    }),
    feature_2: z.object({
        heading: z.string(),
        detail: z.string(),
        image: z.string(),
    }),
    feature_3: z.object({
        heading: z.string(),
        detail: z.string(),
        image: z.string(),
    }),
    projectYear: z.number(),
    live_url: z.string(),
    source: z.object({
        server: z.string(),
        client: z.string(),
    }),
});


const projectUpdateValidationSchema = z.object({
    name: z.string().optional(),
    coreTechs: z.array(z.string()).optional(),
    usedTechnologies: z.array(z.string()).optional(),
    thumbnailImg: z.string().optional().optional(),
    feature_1: z.object({
        heading: z.string().optional(),
        detail: z.string().optional(),
        image: z.string().optional(),
    }).optional(),
    feature_2: z.object({
        heading: z.string().optional(),
        detail: z.string().optional(),
        image: z.string().optional(),
    }).optional(),
    feature_3: z.object({
        heading: z.string().optional(),
        detail: z.string().optional(),
        image: z.string().optional(),
    }).optional(),
    projectYear: z.number().optional(),
    live_url: z.string().optional(),
    source: z.object({
        server: z.string().optional(),
        client: z.string().optional(),
    }).optional(),
});


export const ProjectValidation = {
    projectValidationSchema,
    projectUpdateValidationSchema
};