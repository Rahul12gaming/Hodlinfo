import mongoose from 'mongoose';
export const Database=async()=>
{
    try
    {
        await mongoose.connect('mongodb+srv://quadb:dDeNLUoQCZW89DtH@cluster0.cdwy3p3.mongodb.net/')
        
        console.log("connected");
        
    }
    catch(err)
    {
        console.log(err.message);
        
    }
}