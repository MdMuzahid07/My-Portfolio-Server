import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/send.response";
import { ExperienceService } from "./experience.service";


const createExperience = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;

        const result = await ExperienceService.createExperienceIntoDB(payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "experience created successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


const getExperienceById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const result = await ExperienceService.getExperienceByIdFromDB(id);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "experience retrieved successfully by id!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


const updateExperienceById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;
        const { id } = req.params;

        const result = await ExperienceService.updateExperienceFromDB(id, payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "experience updated successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const deleteExperienceById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const result = await ExperienceService.deleteExperienceByIdFromDB(id);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "experience deleted successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const getExperience = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await ExperienceService.getExperiencesFromDB();

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "all experiences retrieved successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



export const ExperienceController = {
    createExperience,
    updateExperienceById,
    getExperience,
    getExperienceById,
    deleteExperienceById
};