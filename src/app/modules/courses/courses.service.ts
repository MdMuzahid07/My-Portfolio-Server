/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import CustomAppError from "../../errors/CustomAppError";
import CourseModel from "./courses.model";



const createCourseIntoDB = async (payload: any) => {

    if (!payload) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "courses data must be added");
    }

    const isCourseExists = await CourseModel.findOne({ courseName: payload?.courseName, institution: payload?.institution });


    if (isCourseExists) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "course already added");
    };


    const res = await CourseModel.create(payload);

    return res;
};


const getCoursesFromDB = async () => {
    const res = await CourseModel.find().sort({ createdAt: -1 });

    if (!res) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "course not found!");
    };

    return res;
};


const getCourseByIdFromDB = async (id: string) => {
    const res = await CourseModel.findById(id);

    if (!res) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "course not found!");
    };

    return res;
};


const updateCourseFromDB = async (id: string, payload: any) => {

    const isCourseExists = await CourseModel.findById(id);

    if (!isCourseExists) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "course not found!");
    };


    const res = await CourseModel.findByIdAndUpdate(
        id,
        {
            $set: payload
        },
        {
            new: true,
            runValidators: true
        }
    );

    return res;
};


const deleteCourseByIdFromDB = async (id: string) => {

    const isCourseExists = await CourseModel.findById(id);

    if (!isCourseExists) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "course not found to delete!");
    };

    const res = await CourseModel.findByIdAndDelete(id);

    return res;
};


export const CourseService = {
    createCourseIntoDB,
    getCourseByIdFromDB,
    updateCourseFromDB,
    getCoursesFromDB,
    deleteCourseByIdFromDB,
};