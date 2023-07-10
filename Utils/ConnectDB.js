import { mongoose } from "mongoose";

const ConnectDB = async() => {
    try{
        const MONGODB_URI="mongodb+srv://adityagavali0911:aditya2632@cluster0.kgdosgo.mongodb.net/?retryWrites=true&w=majority";
        await mongoose.connect(MONGODB_URI,{
            useNewUrlParser : true,
            useUnifiedTopology :true,
        });
        console.log('Database connected successfully');
    } catch(error){
        console.error('Failed top connect to MongoDB', error)
        return;
    }
}; ConnectDB();

export default ConnectDB;