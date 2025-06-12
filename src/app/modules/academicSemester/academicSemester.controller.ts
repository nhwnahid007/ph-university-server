import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { academicSemesterServices } from "./academicSemester.service";


const createAcademicSemester = catchAsync(async(req,res)=>{

    const result = await academicSemesterServices.createAcademicSemesterIntoDb(req.body)

    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: 'Academic semester created successfully',
        data: result,
    })
    
})

export const AcademicSemesterController = {
    createAcademicSemester
}