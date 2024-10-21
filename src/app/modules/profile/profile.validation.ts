import { z } from "zod";


const profileValidationSchema = z.object({
    titleOfHomepageHeader: z.string().optional(),
    subtitleOfHomepageHeader: z.string().optional(),
    aboutMe: z.string().optional(),
    profileImage: z.string().optional(),
    motivation: z.string().optional(),
    email: z.string().email("email must be a valid email address").optional(),
    resumeLink: z.string().optional(),
});


export const ProfileValidation = {
    profileValidationSchema
};