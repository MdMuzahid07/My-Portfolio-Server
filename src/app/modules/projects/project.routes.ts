import express, { NextFunction, Request, Response } from "express";
import { multerUpload } from "../../config/multer.config";
import { ProjectController } from "./projects.controller";
import requestValidator from "../../middlewares/requestValidator";
import { ProjectValidation } from "./projects.validation";

const router = express.Router();

router.post(
    "/create-recipe",
    multerUpload.single("image"),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = JSON.parse(req.body.data);
        next();
    },
    requestValidator(ProjectValidation.projectValidationSchema),
    ProjectController.createProject,
);

router.get(
    "/",
    ProjectController.getProjects,
);

router.get(
    "/:id",
    ProjectController.getProjectById,
);


router.delete(
    "/:id",
    ProjectController.deleteProjectById,
);

router.patch(
    "/:id",
    requestValidator(ProjectValidation.projectUpdateValidationSchema),
    ProjectController.updateProjectById,
);


export const ProjectRouter = router;