import { NextFunction, Request, Response } from "express";
import { SkillService } from "./skills.service";
import sendResponse from "../../utils/send.response";
import httpStatus from "http-status";


const createSkill = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;
        const file = req.file;

        const result = await SkillService.createSkillIntoDB(file, payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "skill added successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


const getSkillById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const result = await SkillService.getSkillByIdFromDB(id);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "skill retrieved successfully by skill id!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


const updateSkillById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;
        const { id } = req.params;
        const file = req.file;

        const result = await SkillService.updateSkillFromDB(file, id, payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "skill updated successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const deleteSkillById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const result = await SkillService.deleteSkillByIdFromDB(id);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "skill deleted successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const getSkills = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await SkillService.getSkillsFromDB();

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "skill retrieved successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



export const SkillController = {
    createSkill,
    getSkillById,
    getSkills,
    deleteSkillById,
    updateSkillById
};