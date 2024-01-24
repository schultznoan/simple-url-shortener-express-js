import mongoose from 'mongoose';

const Url = new mongoose.Schema({
    alias: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
})

export default mongoose.model('url', Url)
