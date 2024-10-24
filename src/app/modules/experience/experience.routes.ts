import express from "express";
import requestValidator from "../../middlewares/requestValidator";
import { ExperienceValidation } from "./experience.validation";
import { ExperienceController } from "./experience.controller";


const router = express.Router();

router.post(
    "/add-experience",
    requestValidator(ExperienceValidation.ExperienceValidationSchema),
    ExperienceController.createExperience,
);

router.get(
    "/",
    ExperienceController.getExperience,
);

router.get(
    "/:id",
    ExperienceController.getExperienceById,
);


router.delete(
    "/:id",
    ExperienceController.deleteExperienceById,
);

router.patch(
    "/:id",
    requestValidator(ExperienceValidation.ExperienceUpdateValidationSchema),
    ExperienceController.updateExperienceById,
);


export const ExperienceRouter = router;