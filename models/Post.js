

import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    Image : {
        type: String,
        required: true,
    },
    header: {
        type: String,
        required: true,
    },
    description:  {
        type: String,
        required: true,
    },
    Author:  {
        type: String,
        required: true,
    },
    Date:  {
        type: String,
        required: true,
    },
});
export default mongoose.models.Post || mongoose.model ('Post', postSchema);