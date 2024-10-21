import express from "express";
import { ProjectRouter } from "../modules/projects/project.routes";
import { SkillRouter } from "../modules/skills/skills.routes";
import { SocialRouter } from "../modules/social/social.routes";
import { HobbyRouter } from "../modules/hobby/hobby.routes";


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
];


moduleRoutes.forEach((route) => router.use(route.path, route.route));


export default router;