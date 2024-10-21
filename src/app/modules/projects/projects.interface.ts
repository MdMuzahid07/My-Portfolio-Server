export interface IProject {
    name: string;
    coreTechs: string[];
    usedTechnologies: string[];
    thumbnailImg: string;
    feature_1?: {
        heading?: string;
        detail?: string;
        image?: string;
    };
    feature_2?: {
        heading?: string;
        detail?: string;
        image?: string;
    };
    feature_3?: {
        heading?: string;
        detail?: string;
        image?: string;
    };
    projectYear: number;
    live_url?: string;
    source?: {
        server?: string;
        client?: string;
    };
}
