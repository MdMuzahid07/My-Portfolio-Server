/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import CustomAppError from "../../errors/CustomAppError";
import ExperienceModel from "./experience.model";

const createExperienceIntoDB = async (payload: any) => {

    if (!payload) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "experience data must be added");
    }

    const isExperienceExists = await ExperienceModel.findOne({ company: payload?.company, startDate: payload?.startDate, endDate: payload?.endDate });


    if (isExperienceExists) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "this experience already added with this company");
    };


    const res = await ExperienceModel.create(payload);

    return res;
};


const getExperiencesFromDB = async () => {
    const res = await ExperienceModel.find().sort({ createdAt: -1 });

    if (!res) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "experience not found!");
    };

    return res;
};


const getExperienceByIdFromDB = async (id: string) => {
    const res = await ExperienceModel.findById(id);

    if (!res) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "experience not found!");
    };

    return res;
};


const updateExperienceFromDB = async (id: string, payload: any) => {

    const isExperienceExists = await ExperienceModel.findById(id);

    if (!isExperienceExists) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "experience not found!");
    };


    const res = await ExperienceModel.findByIdAndUpdate(
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


const deleteExperienceByIdFromDB = async (id: string) => {

    const isExperienceExists = await ExperienceModel.findById(id);

    if (!isExperienceExists) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "experience not found to delete!");
    };

    const res = await ExperienceModel.findByIdAndDelete(id);

    return res;
};


export const ExperienceService = {
    createExperienceIntoDB,
    getExperienceByIdFromDB,
    updateExperienceFromDB,
    getExperiencesFromDB,
    deleteExperienceByIdFromDB,
};