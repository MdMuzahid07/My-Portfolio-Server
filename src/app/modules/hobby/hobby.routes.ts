import express, { NextFunction, Request, Response } from "express";
import { multerUpload } from "../../config/multer.config";
import { HobbyController } from "./hobby.controller";
import requestValidator from "../../middlewares/requestValidator";
import { HobbyValidation } from "./hobby.validation";


const router = express.Router();

router.post(
    "/add-hobby",
    multerUpload.single("icon"),
    (req: Request, res: Response, next: NextFunction) => {
        req.body = JSON.parse(req.body.data);
        next();
    },
    requestValidator(HobbyValidation.hobbyValidationSchema),
    HobbyController.createHobby,
);

router.get(
    "/",
    HobbyController.getAllHobby,
);

router.get(
    "/:id",
    HobbyController.getHobbyById,
);


router.delete(
    "/:id",
    HobbyController.deleteHobbyById,
);

router.patch(
    "/:id",
    requestValidator(HobbyValidation.hobbyUpdateValidationSchema),
    HobbyController.updateHobbyById,
);



export const HobbyRouter = router;