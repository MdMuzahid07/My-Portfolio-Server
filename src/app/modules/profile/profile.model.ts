import mongoose from "mongoose";
import ProfileSchema from "./profile.schema";


const ProfileModel = mongoose.model("profile", ProfileSchema);

export default ProfileModel;