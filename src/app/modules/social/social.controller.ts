import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/send.response";
import httpStatus from "http-status";
import { SocialService } from "./social.service";



const createSocial = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;
        const file = req.file;

        const result = await SocialService.createSocialIntoDB(file, payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "social link added successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};




const getSocialById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const result = await SocialService.getSocialByIdFromDB(id);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "social link id retrieved successfully by social link id id!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};




const updateSocialById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;
        const { id } = req.params;
        const file = req.file;

        const result = await SocialService.updateSocialFromDB(file, id, payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "social link updated successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



const deleteSocialById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const result = await SocialService.deleteSocialByIdFromDB(id);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "social link deleted successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



const getSocialPlatforms = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await SocialService.getSocialsFromDB();

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "social retrieved successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};




export const SocialPlatformController = {
    createSocial,
    getSocialById,
    updateSocialById,
    deleteSocialById,
    getSocialPlatforms
};