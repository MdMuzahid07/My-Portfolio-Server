import { z } from "zod";


const CourseValidationSchema = z.object({
    courseName: z.string(),
    institution: z.string(),
    completionDate: z.string(),
    certificateLink: z.string(),
    skillsLearned: z.array(z.object({})),
});


const CourseUpdateValidationSchema = z.object({
    courseName: z.string().optional(),
    institution: z.string().optional(),
    completionDate: z.string().optional(),
    certificateLink: z.string().optional(),
    skillsLearned: z.array(z.object({})).optional(),
});


export const CourseValidation = {
    CourseValidationSchema,
    CourseUpdateValidationSchema
};