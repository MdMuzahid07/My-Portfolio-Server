import httpStatus from "http-status";
import sendResponse from "../../utils/send.response";
import { NextFunction, Request, Response } from "express";
import { ProjectService } from "./projects.service";

const createProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;
        const file = req.file;

        const result = await ProjectService.createProjectIntoDB(file, payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "project created successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


const getProjectById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const result = await ProjectService.getProjectByIdFromDB(id);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "project retrieved successfully by project id!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


const updateProjectById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;
        const { id } = req.params;
        const file = req.file;

        const result = await ProjectService.updateProjectFromDB(file, id, payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "project updated successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const deleteProjectById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const result = await ProjectService.deleteProjectByIdFromDB(id);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "project deleted successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const getProjects = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await ProjectService.getProjectsFromDB();

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "project retrieved successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};




export const ProjectController = {
    createProject,
    getProjectById,
    getProjects,
    deleteProjectById,
    updateProjectById
};