import express, { NextFunction, Request, Response } from "express";
import { multerUpload } from "../../config/multer.config";
import { ProfileValidation } from "./profile.validation";
import { ProfileController } from "./profile.controller";
import requestValidator from "../../middlewares/requestValidator";


const router = express.Router();

router.post(
    "/create-profile",
    multerUpload.single("image"),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = JSON.parse(req.body.data);
        next();
    },
    requestValidator(ProfileValidation.profileValidationSchema),
    ProfileController.createProfile,
);

router.get(
    "/",
    ProfileController.getProfile,
);


router.delete(
    "/:id",
    ProfileController.deleteProfileById,
);

router.patch(
    "/:id",
    multerUpload.single("image"),
    (req: Request, res: Response, next: NextFunction) => {
        if (req?.body?.data) {
            req.body = JSON.parse(req.body.data);
        }
        next();
    },
    requestValidator(ProfileValidation.profileValidationSchema),
    ProfileController.updateProfileById,
);


export const ProfileRouter = router;