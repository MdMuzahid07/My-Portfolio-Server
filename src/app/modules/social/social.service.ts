/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import CustomAppError from "../../errors/CustomAppError";
import SocialModel from "./social.model";

const createSocialIntoDB = async (file: any, payload: any) => {

    if (!payload) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "social data must be added");
    };

    const isSocialExists = await SocialModel.findOne({ name: payload?.name, url: payload?.url });


    if (isSocialExists) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "this social link already added");
    };

    if (!file) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "social platform icon must be added");
    };

    const socialData = {
        ...payload,
    };

    if (file) {
        socialData.icon = file?.path;
    };

    const res = await SocialModel.create(socialData);

    return res;
};


const getSocialsFromDB = async () => {
    const res = await SocialModel.find().sort({ createdAt: -1 });
    return res;
};


const getSocialByIdFromDB = async (id: string) => {
    const res = await SocialModel.findById(id);

    if (!res) {
        throw new CustomAppError(httpStatus.BAD_REQUEST, "social platform not found!");
    };

    return res;
};




const updateSocialFromDB = async (file: any, id: string, payload: any) => {

    const isSocialExists = await SocialModel.findById(id);

    if (!isSocialExists) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "social platform not found!");
    };

    const socialData = {
        ...payload,
    };

    if (file) {
        socialData.icon = file?.path;
    };


    const res = await SocialModel.findByIdAndUpdate(
        id,
        {
            $set: socialData
        },
        {
            new: true,
            runValidators: true
        }
    );

    return res;
};


const deleteSocialByIdFromDB = async (id: string) => {

    const isSocialExists = await SocialModel.findById(id);

    if (!isSocialExists) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "social platform not found to delete!");
    };

    const res = await SocialModel.findByIdAndDelete(id);

    return res;
};


export const SocialService = {
    createSocialIntoDB,
    getSocialByIdFromDB,
    updateSocialFromDB,
    getSocialsFromDB,
    deleteSocialByIdFromDB,
};