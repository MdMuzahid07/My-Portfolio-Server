import express from "express";
import { ProjectRouter } from "../modules/projects/project.routes";
import { SkillRouter } from "../modules/skills/skills.routes";
import { SocialRouter } from "../modules/social/social.routes";
import { HobbyRouter } from "../modules/hobby/hobby.routes";
import { ProfileRouter } from "../modules/profile/profile.routes";
import { EducationRouter } from "../modules/education/education.routes";


const router = express.Router();

const moduleRoutes = [
    {
        path: "/project",
        route: ProjectRouter
    },
    {
        path: "/skill",
        route: SkillRouter
    },
    {
        path: "/social",
        route: SocialRouter
    },
    {
        path: "/hobby",
        route: HobbyRouter
    },
    {
        path: "/profile",
        route: ProfileRouter
    },
    {
        path: "/education",
        route: EducationRouter
    },
];


moduleRoutes.forEach((route) => router.use(route.path, route.route));


export default router;