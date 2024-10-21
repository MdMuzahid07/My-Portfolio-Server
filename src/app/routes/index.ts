import express from "express";
import { ProjectRouter } from "../modules/projects/project.routes";


const router = express.Router();

const moduleRoutes = [
    {
        path: "/project",
        route: ProjectRouter
    }
];


moduleRoutes.forEach((route) => router.use(route.path, route.route));


export default router;