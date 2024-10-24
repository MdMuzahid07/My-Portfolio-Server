import express from "express";
import requestValidator from "../../middlewares/requestValidator";
import { BlogController } from "./blogs.controller";
import { BlogValidation } from "./blogs.validation";
import { multerUpload } from "../../config/multer.config";



const router = express.Router();

router.post(
    "/post-blog",
    multerUpload.single("thumbnail"),
    requestValidator(BlogValidation.BlogValidationSchema),
    BlogController.createBlog,
);


router.get(
    "/",
    BlogController.getBlogs,
);


router.get(
    "/:id",
    BlogController.getBlogById,
);


router.delete(
    "/:id",
    BlogController.deleteBlogById,
);


router.patch(
    "/:id",
    multerUpload.single("thumbnail"),
    requestValidator(BlogValidation.BlogUpdateValidationSchema),
    BlogController.updateBlogById,
);


export const BlogRouter = router;