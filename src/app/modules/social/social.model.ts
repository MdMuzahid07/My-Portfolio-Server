import mongoose from "mongoose";
import socialSchema from "./social.schema";


const SocialModel = mongoose.model("social", socialSchema);

export default SocialModel;