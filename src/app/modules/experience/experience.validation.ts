import { z } from "zod";

const ExperienceValidationSchema = z.object({
    company: z.string(),
    position: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    location: z.string(),
    responsibilities: z.string(),
    technologiesUsed: z.array(
        z.object({
            _id: z.string().optional(),
            icon: z.string(),
            name: z.string()
        })
    ),
    achievements: z.string().optional(),
    employmentType: z.enum([
        "Full-time",
        "Part-time",
        "Contract",
        "Freelance",
        "Internship"
    ]),
    companyWebsite: z.string().optional(),
    logo: z.string().optional(),
});

const ExperienceUpdateValidationSchema = z.object({
    company: z.string().optional(),
    position: z.string().optional(),
    startDate: z.string().optional(),
    endDate: z.string().optional(),
    location: z.string().optional(),
    responsibilities: z.string().optional(),
    technologiesUsed: z.array(
        z.object({
            _id: z.string().optional(),
            icon: z.string(),
            name: z.string()
        })
    ).optional(),
    achievements: z.string().optional(),
    employmentType: z.enum([
        "Full-time",
        "Part-time",
        "Contract",
        "Freelance",
        "Internship"
    ]).optional(),
    companyWebsite: z.string().optional(),
    logo: z.string().optional(),
});

export const ExperienceValidation = {
    ExperienceValidationSchema,
    ExperienceUpdateValidationSchema
};
