import express, { NextFunction, Request, Response } from "express";
import { multerUpload } from "../../config/multer.config";
import requestValidator from "../../middlewares/requestValidator";
import { SocialValidation } from "./social.validation";
import { SocialPlatformController } from "./social.controller";

const router = express.Router();

router.post(
    "/add-social-link",
    multerUpload.single("icon"),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = JSON.parse(req.body.data);
        next();
    },
    requestValidator(SocialValidation.socialValidationSchema),
    SocialPlatformController.createSocial,
);

router.get(
    "/",
    SocialPlatformController.getSocialPlatforms,
);

router.get(
    "/:id",
    SocialPlatformController.getSocialById,
);


router.delete(
    "/:id",
    SocialPlatformController.deleteSocialById,
);

router.patch(
    "/:id",
    requestValidator(SocialValidation.socialUpdateValidationSchema),
    SocialPlatformController.updateSocialById,
);



export const SocialRouter = router;