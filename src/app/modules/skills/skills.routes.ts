import express, { NextFunction, Request, Response } from "express";
import { multerUpload } from "../../config/multer.config";
import { SkillValidation } from "./skills.validation";
import requestValidator from "../../middlewares/requestValidator";
import { SkillController } from "./skills.controller";

const router = express.Router();

router.post(
    "/add-skill",
    multerUpload.single("icon"),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = JSON.parse(req.body.data);
        next();
    },
    requestValidator(SkillValidation.skillValidationSchema),
    SkillController.createSkill,
);

router.get(
    "/",
    SkillController.getSkills,
);

router.get(
    "/:id",
    SkillController.getSkillById,
);


router.delete(
    "/:id",
    SkillController.deleteSkillById,
);

router.patch(
    "/:id",
    (req: Request, res: Response, next: NextFunction) => {
        if (req?.body?.data) {
            req.body = JSON.parse(req.body.data);
        }
        next();
    },
    requestValidator(SkillValidation.skillUpdateValidationSchema),
    SkillController.updateSkillById,
);


export const SkillRouter = router;