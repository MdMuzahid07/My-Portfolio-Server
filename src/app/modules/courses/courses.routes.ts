import express from "express";
import requestValidator from "../../middlewares/requestValidator";
import { CourseValidation } from "./courses.validation";
import { CourseController } from "./courses.controller";


const router = express.Router();


router.post(
    "/add-course",
    requestValidator(CourseValidation.CourseValidationSchema),
    CourseController.createCourse,
);


router.get(
    "/",
    CourseController.getCourse,
);


router.get(
    "/:id",
    CourseController.getCourseById,
);


router.delete(
    "/:id",
    CourseController.deleteCourseById,
);


router.patch(
    "/:id",
    requestValidator(CourseValidation.CourseUpdateValidationSchema),
    CourseController.updateCourseById,
);


export const CourseRouter = router;