/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import BlogModel from "./blogs.model";
import CustomAppError from "../../errors/CustomAppError";

const createBlogIntoDB = async (file: any, payload: any) => {

    if (!payload?.title || !payload?.texts) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "blog all data must be added");
    }


    if (!file) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "blog thumbnail must be added");
    }


    const BlogData = {
        ...payload
    };


    if (file) {
        BlogData.thumbnail = file?.path;
    }




    const res = await BlogModel.create(BlogData);


    return res;
};


const getBlogsFromDB = async () => {
    const res = await BlogModel.find().sort({ createdAt: -1 });
    return res;
};


const getBlogByIdFromDB = async (id: string) => {
    const res = await BlogModel.findById(id);

    if (!res) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "blog not found!");
    };

    return res;
};


const updateBlogFromDB = async (file: any, id: string, payload: any) => {

    const isBlogExists = await BlogModel.findById(id);

    if (!isBlogExists) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "blog not found!");
    };

    const BlogData = {
        ...payload,
    };

    if (file) {
        BlogData.thumbnail = file?.path;
    };


    const res = await BlogModel.findByIdAndUpdate(
        id,
        {
            $set: BlogData
        },
        {
            new: true,
            runValidators: true
        }
    );

    return res;
};


const deleteBlogByIdFromDB = async (id: string) => {

    const isBlogExists = await BlogModel.findById(id);

    if (!isBlogExists) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "blog not found to delete!");
    };

    const res = await BlogModel.findByIdAndDelete(id);

    return res;
};




export const BlogService = {
    createBlogIntoDB,
    getBlogByIdFromDB,
    updateBlogFromDB,
    getBlogsFromDB,
    deleteBlogByIdFromDB,
};