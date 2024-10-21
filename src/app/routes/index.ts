import express from "express";
import { ProjectRouter } from "../modules/projects/project.routes";
import { SkillRouter } from "../modules/skills/skills.routes";
import { SocialRouter } from "../modules/social/social.routes";


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
    }
];


moduleRoutes.forEach((route) => router.use(route.path, route.route));


export default router;