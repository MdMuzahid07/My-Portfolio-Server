/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import CustomAppError from "../../errors/CustomAppError";
import HobbyModel from "./hobby.model";

const createHobbyIntoDB = async (file: any, payload: any) => {

    if (!payload) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "hobby data must be added");
    };

    const isHobbyExists = await HobbyModel.findOne({ name: payload?.name, icon: payload?.url });


    if (isHobbyExists) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "this hobby already added");
    };

    if (!file) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "hobby icon must be added");
    };

    const hobbyData = {
        ...payload,
    };

    if (file) {
        hobbyData.icon = file?.path;
    };

    const res = await HobbyModel.create(hobbyData);

    return res;
};


const getHobbyFromDB = async () => {
    const res = await HobbyModel.find().sort({ createdAt: -1 });
    return res;
};


const getHobbyByIdFromDB = async (id: string) => {
    const res = await HobbyModel.findById(id);

    if (!res) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "hobby not found!");
    };

    return res;
};




const updateHobbyFromDB = async (file: any, id: string, payload: any) => {

    const isHobbyExists = await HobbyModel.findById(id);

    if (!isHobbyExists) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "hobby not found!");
    };

    const hobbyData = {
        ...payload,
    };

    if (file) {
        hobbyData.icon = file?.path;
    };


    const res = await HobbyModel.findByIdAndUpdate(
        id,
        {
            $set: hobbyData
        },
        {
            new: true,
            runValidators: true
        }
    );

    return res;
};


const deleteHobbyByIdFromDB = async (id: string) => {

    const isHobbyExists = await HobbyModel.findById(id);

    if (!isHobbyExists) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "hobby not found to delete!");
    };

    const res = await HobbyModel.findByIdAndDelete(id);

    return res;
};


export const HobbyService = {
    createHobbyIntoDB,
    getHobbyByIdFromDB,
    updateHobbyFromDB,
    getHobbyFromDB,
    deleteHobbyByIdFromDB,
};