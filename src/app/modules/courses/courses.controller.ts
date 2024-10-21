import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";
import { CourseService } from "./courses.service";
import sendResponse from "../../utils/send.response";


const createCourse = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;

        const result = await CourseService.createCourseIntoDB(payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "course created successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


const getCourseById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const result = await CourseService.getCourseByIdFromDB(id);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "course retrieved successfully by id!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


const updateCourseById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;
        const { id } = req.params;

        const result = await CourseService.updateCourseFromDB(id, payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "course updated successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const deleteCourseById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const result = await CourseService.deleteCourseByIdFromDB(id);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "course deleted successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const getCourse = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await CourseService.getCoursesFromDB();

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "course retrieved successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};



export const CourseController = {
    createCourse,
    getCourse,
    getCourseById,
    updateCourseById,
    deleteCourseById
};