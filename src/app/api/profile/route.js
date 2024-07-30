import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]"; 
import { User } from "../../../models/User";



export async function PUT (req) {
    mongoose.connect(process.env.MONGO_URL);
    const data = await req.json();
    const session = await getServerSession(authOptions)
    console.log (session, data)
    const email = session.user.email;

    

    if ( "username" in data) {
    await User.updateOne({email}, {username:data.username})
    }
    return Response.json(true);
}

