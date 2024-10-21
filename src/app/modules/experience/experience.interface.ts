export interface IExperience {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    location: string;
    // Array of responsibilities/descriptions string format
    responsibilities: string[];
    // Array of technologies used in the company
    technologiesUsed: string[];
    // Array of achievements (optional)
    achievements?: string[];
    // Employment type with predefined options
    employmentType: "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship";
    // Optional field for company website
    companyWebsite?: string;
    // Optional field for logo URL
    logo?: string;
};
