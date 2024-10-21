/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import CustomAppError from "../../errors/CustomAppError";
import EducationModel from "./education.model";

const createEducationIntoDB = async (payload: any) => {

    if (!payload) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "education all data must be added");
    }

    const isEducationExists = await EducationModel.findOne({ degree: payload?.degree, institution: payload?.institution });


    if (isEducationExists) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "this education already added");
    };


    const res = await EducationModel.create(payload);

    return res;
};


const getEducationsFromDB = async () => {
    const res = await EducationModel.find().sort({ createdAt: -1 });

    if (!res) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "education not found!");
    };

    return res;
};


const getEducationByIdFromDB = async (id: string) => {
    const res = await EducationModel.findById(id);

    if (!res) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "education not found!");
    };

    return res;
};


const updateEducationFromDB = async (id: string, payload: any) => {

    const isEducationExists = await EducationModel.findById(id);

    if (!isEducationExists) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "education not found!");
    };


    const res = await EducationModel.findByIdAndUpdate(
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


const deleteEducationByIdFromDB = async (id: string) => {

    const isEducationExists = await EducationModel.findById(id);

    if (!isEducationExists) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "education not found to delete!");
    };

    const res = await EducationModel.findByIdAndDelete(id);

    return res;
};


export const EducationService = {
    createEducationIntoDB,
    getEducationByIdFromDB,
    updateEducationFromDB,
    getEducationsFromDB,
    deleteEducationByIdFromDB,
};