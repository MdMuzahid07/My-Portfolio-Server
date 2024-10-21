import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";
import { EducationService } from "./education.service";
import sendResponse from "../../utils/send.response";


const createEducation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;

        const result = await EducationService.createEducationIntoDB(payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "education created successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


const getEducationById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const result = await EducationService.getEducationByIdFromDB(id);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "education retrieved successfully by id!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


const updateEducationById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;
        const { id } = req.params;

        const result = await EducationService.updateEducationFromDB(id, payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "education updated successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const deleteEducationById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const result = await EducationService.deleteEducationByIdFromDB(id);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "education deleted successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const getEducation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await EducationService.getEducationsFromDB();

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "education retrieved successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



export const EducationController = {
    createEducation,
    updateEducationById,
    getEducation,
    getEducationById,
    deleteEducationById
};