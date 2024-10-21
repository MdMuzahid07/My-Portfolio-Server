import express from "express";
import { ProjectRouter } from "../modules/projects/project.routes";
import { SkillRouter } from "../modules/skills/skills.routes";


const router = express.Router();

const moduleRoutes = [
    {
        path: "/project",
        route: ProjectRouter
    },
    {
        path: "/skill",
        route: SkillRouter
    }
];


moduleRoutes.forEach((route) => router.use(route.path, route.route));


export default router;