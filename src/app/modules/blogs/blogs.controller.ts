import httpStatus from "http-status";
import { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/send.response";
import { BlogService } from "./blogs.service";

const createBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const richText = await req.body.texts;
        const title = await req.body.title;
        const file = req.file;
        const payload = {
            texts: richText,
            title: title
        };


        const result = await BlogService.createBlogIntoDB(file, payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "blog posted successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


const getBlogById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const result = await BlogService.getBlogByIdFromDB(id);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "blog retrieved successfully by Blog id!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};


const updateBlogById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const payload = req.body;
        const { id } = req.params;
        const file = req.file;

        const result = await BlogService.updateBlogFromDB(file, id, payload);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "blog updated successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const deleteBlogById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { id } = req.params;

        const result = await BlogService.deleteBlogByIdFromDB(id);

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "blog deleted successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

const getBlogs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await BlogService.getBlogsFromDB();

        sendResponse(res, {
            success: true,
            statusCode: httpStatus.OK,
            message: "blogs retrieved successfully!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
};




export const BlogController = {
    createBlog,
    getBlogById,
    getBlogs,
    deleteBlogById,
    updateBlogById
};