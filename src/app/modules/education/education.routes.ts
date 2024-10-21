import express from "express";
import requestValidator from "../../middlewares/requestValidator";
import { EducationValidation } from "./education.validation";
import { EducationController } from "./education.controller";

const router = express.Router();

router.post(
    "/add-education",
    requestValidator(EducationValidation.EducationValidationSchema),
    EducationController.createEducation,
);

router.get(
    "/",
    EducationController.getEducation,
);

router.get(
    "/:id",
    EducationController.getEducationById,
);


router.delete(
    "/:id",
    EducationController.deleteEducationById,
);

router.patch(
    "/:id",
    requestValidator(EducationValidation.EducationUpdateValidationSchema),
    EducationController.updateEducationById,
);


export const EducationRouter = router;