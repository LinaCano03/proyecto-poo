import mongoose from "mongoose";
export function debConection (){
    return mongoose.connect('mongodb+srv://linamarcecano02:linamarcecano02@cluster0.w8joa.mongodb.net/poo?retryWrites=true&w=majority&appName=Cluster0');
} 