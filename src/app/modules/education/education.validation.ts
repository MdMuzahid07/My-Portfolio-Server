import { z } from "zod";


const EducationValidationSchema = z.object({
    institution: z.string(),
    degree: z.string(),
    fieldOfStudy: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    location: z.string(),
    // Optional field
    gpa: z.string().optional(),
    // Optional field
    description: z.string().optional(),
    // Optional array of strings
    achievements: z.array(z.string()).optional(),
});


const EducationUpdateValidationSchema = z.object({
    institution: z.string().optional(),
    degree: z.string().optional(),
    fieldOfStudy: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    location: z.string().optional(),
    // Optional field
    gpa: z.string().optional().optional(),
    // Optional field
    description: z.string().optional(),
    // Optional array of strings
    achievements: z.array(z.string()).optional(),
});

export const EducationValidation = {
    EducationValidationSchema,
    EducationUpdateValidationSchema
};