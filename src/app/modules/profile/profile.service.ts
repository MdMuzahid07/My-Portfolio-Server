/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import CustomAppError from "../../errors/CustomAppError";
import ProfileModel from "./profile.model";

const createProfileIntoDB = async (file: any, payload: any) => {

    if (!payload) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "profile data must be added");
    }

    if (!file) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "profile image must be added");
    }

    const profileData = {
        ...payload,
    };

    if (file) {
        profileData.profileImage = file?.path;
    };

    const res = await ProfileModel.create(profileData);

    return res;
};


const getProfilesFromDB = async () => {
    const res = await ProfileModel.find().sort({ createdAt: -1 });
    return res;
};


// const getProfileByIdFromDB = async (id: string) => {
//     const res = await ProfileModel.findById(id);

//     if (!res) {
//         throw new CustomAppError(httpStatus.BAD_REQUEST, "profile not found!");
//     };

//     return res;
// };




const updateProfileFromDB = async (file: any, id: string, payload: any) => {

    const isProfileExists = await ProfileModel.findById(id);

    console.log({
        id,
        file,
        payload
    })

    if (!isProfileExists) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "profile not found!");
    };

    const profileData = {
        ...payload,
    };

    if (file) {
        profileData.profileImage = file?.path;
    };


    const res = await ProfileModel.findByIdAndUpdate(
        id,
        {
            $set: profileData
        },
        {
            new: true,
            runValidators: true
        }
    );

    return res;
};


const deleteProfileByIdFromDB = async (id: string) => {

    const isProfileExists = await ProfileModel.findById(id);

    if (!isProfileExists) {
        throw new CustomAppError(httpStatus.NOT_FOUND, "profile not found to delete!");
    };

    const res = await ProfileModel.findByIdAndDelete(id);

    return res;
};


export const ProfileService = {
    createProfileIntoDB,
    updateProfileFromDB,
    getProfilesFromDB,
    deleteProfileByIdFromDB,
};