import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/send.response";
import httpStatus from "http-status";
import { HobbyService } from "./hobby.service";



const createHobby = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;
        const file = req.file;

        const result = await HobbyService.createHobbyIntoDB(file, payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "hobby added successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};




const getHobbyById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const result = await HobbyService.getHobbyByIdFromDB(id);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "hobby retrieved successfully by hobby id!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};




const updateHobbyById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;
        const { id } = req.params;
        const file = req.file;

        const result = await HobbyService.updateHobbyFromDB(file, id, payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "hobby updated successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



const deleteHobbyById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const result = await HobbyService.deleteHobbyByIdFromDB(id);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "hobby deleted successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



const getAllHobby = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await HobbyService.getHobbyFromDB();

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "Hobby retrieved successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};




export const HobbyController = {
    createHobby,
    getHobbyById,
    updateHobbyById,
    deleteHobbyById,
    getAllHobby
};