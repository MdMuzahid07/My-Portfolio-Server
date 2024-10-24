import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";
import { ProfileService } from "./profile.service";
import sendResponse from "../../utils/send.response";

const createProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;
        const file = req.file;

        const result = await ProfileService.createProfileIntoDB(file, payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "profile created successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


// const getProfileById = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         const { id } = req.params;

//         const result = await ProfileService;

//         sendResponse(res, {
//             success: true,
//             statusCode: httpStatus.OK,
//             message: "project retrieved successfully by project id!",
//             data: result,
//         });
//     } catch (error) {
//         next(error);
//     }
// };


const updateProfileById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;
        const { id } = req.params;
        const file = req.file;


        const result = await ProfileService.updateProfileFromDB(file, id, payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "profile updated successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const deleteProfileById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const result = await ProfileService.deleteProfileByIdFromDB(id);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "profile deleted successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const getProfile = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await ProfileService.getProfilesFromDB();

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "profile retrieved successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


export const ProfileController = {
    createProfile,
    getProfile,
    updateProfileById,
    deleteProfileById
};