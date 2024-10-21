/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import CustomAppError from "../../errors/CustomAppError";
import SkillModel from "./skills.model";

const createSkillIntoDB = async (file: any, payload: any) => {

    if (!payload) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "skill data must be added");
    };

    const isSkillExists = await SkillModel.findOne({ name: payload?.name, url: payload?.url });


    if (isSkillExists) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "this skill already added");
    };

    if (!file) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "skill icon must be added");
    };

    const SkillData = {
        ...payload,
    };

    if (file) {
        SkillData.icon = file?.path;
    };

    const res = await SkillModel.create(SkillData);

    return res;
};


const getSkillsFromDB = async () => {
    const res = await SkillModel.find().sort({ createdAt: -1 });
    return res;
};


const getSkillByIdFromDB = async (id: string) => {
    const res = await SkillModel.findById(id);

    if (!res) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "skill not found!");
    };

    return res;
};




const updateSkillFromDB = async (file: any, id: string, payload: any) => {

    const isSkillExists = await SkillModel.findById(id);

    if (!isSkillExists) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "skill not found!");
    };

    const SkillData = {
        ...payload,
    };

    if (file) {
        SkillData.icon = file?.path;
    };


    const res = await SkillModel.findByIdAndUpdate(
        id,
        {
            $set: SkillData
        },
        {
            new: true,
            runValidators: true
        }
    );

    return res;
};


const deleteSkillByIdFromDB = async (id: string) => {

    const isSkillExists = await SkillModel.findById(id);

    if (!isSkillExists) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "skill not found to delete!");
    };

    const res = await SkillModel.findByIdAndDelete(id);

    return res;
};


export const SkillService = {
    createSkillIntoDB,
    getSkillByIdFromDB,
    updateSkillFromDB,
    getSkillsFromDB,
    deleteSkillByIdFromDB,
};