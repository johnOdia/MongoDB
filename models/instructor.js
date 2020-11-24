import { Mongoose } from "mongoose";

const instructorSchema = new Mongoose.Schema(
    {
        firstName: String,
        lastName: String,
        isHilarious: {type:Boolean, default:true},
        favoriteColors: [String]    
    },
    {timeStamps:true}
)

const Instructor = Mongoose.model('Instructor',instructorSchema)

module.exports = Instructor