import { z } from "zod";


const ExperienceValidationSchema = z.object({
    company: z.string(),
    position: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    location: z.string(),
    responsibilities: z.array(z.string()),
    technologiesUsed: z.array(z.string()),
    achievements: z.array(z.string()).optional(),
    employmentType: z.enum([
        "Full-time",
        "Part-time",
        "Contract",
        "Freelance",
        "Internship"
    ]),
    companyWebsite: z.string().url().optional(),
    logo: z.string().url().optional(),
});



const ExperienceUpdateValidationSchema = z.object({
    company: z.string().optional(),
    position: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    location: z.string().optional(),
    responsibilities: z.array(z.string()).optional(),
    technologiesUsed: z.array(z.string().optional()).optional(),
    achievements: z.array(z.string()).optional(),
    employmentType: z.enum([
        "Full-time",
        "Part-time",
        "Contract",
        "Freelance",
        "Internship"
    ]).optional(),
    companyWebsite: z.string().url().optional(),
    logo: z.string().url().optional(),
});




export const ExperienceValidation = {
    ExperienceValidationSchema,
    ExperienceUpdateValidationSchema
};
