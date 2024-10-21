export interface ICourse {
    courseName: string;
    institution: string;
    // Example: "January 2023"
    completionDate: string;
    certificateLink?: string;
    skillsLearned: string[];
};