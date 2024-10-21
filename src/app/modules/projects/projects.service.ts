/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import CustomAppError from "../../errors/CustomAppError";
import ProjectModel from "./projects.model";

const createProjectIntoDB = async (file: any, payload: any) => {

    if (!payload) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "project all data must be added");
    }

    const isProjectExists = await ProjectModel.findOne({ name: payload?.name, live_url: payload?.live_url });


    if (isProjectExists) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "this project already added");
    };

    if (!file) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "project thumbnail must be added");
    }

    const projectData = {
        ...payload,
    };

    if (file) {
        projectData.thumbnailImg = file?.path;
    };

    const res = await ProjectModel.create(projectData);

    return res;
};


const getProjectsFromDB = async () => {
    const res = await ProjectModel.find().sort({ createdAt: -1 });
    return res;
};


const getProjectByIdFromDB = async (id: string) => {
    const res = await ProjectModel.findById(id);

    if (!res) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "project not found!");
    };

    return res;
};




const updateProjectFromDB = async (file: any, id: string, payload: any) => {

    const isProjectExists = await ProjectModel.findById(id);

    if (!isProjectExists) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "project not found!");
    };

    const projectData = {
        ...payload,
    };

    if (file) {
        projectData.thumbnailImg = file?.path;
    };


    const res = await ProjectModel.findByIdAndUpdate(
        id,
        {
            $set: projectData
        },
        {
            new: true,
            runValidators: true
        }
    );

    return res;
};


const deleteProjectByIdFromDB = async (id: string) => {

    const isProjectExists = await ProjectModel.findById(id);

    if (!isProjectExists) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "project not found to delete!");
    };

    const res = await ProjectModel.findByIdAndDelete(id);

    return res;
};


export const ProjectService = {
    createProjectIntoDB,
    getProjectByIdFromDB,
    updateProjectFromDB,
    getProjectsFromDB,
    deleteProjectByIdFromDB,
};