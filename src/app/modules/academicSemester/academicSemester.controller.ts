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

const getAllAcademicSemester = catchAsync(async(req,res)=>{

    const result = await academicSemesterServices.getAllAcademicSemesterFromDb()

    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: 'Academic semester fetched successfully',
        data: result,
    })
    
})

const getSingleAcademicSemester = catchAsync(async(req,res)=>{  

    const result = await academicSemesterServices.getSingleAcademicSemesterFromDb(req.params.id)

    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: 'Academic semester fetched successfully',
        data: result,
    })
})

const updateAcademicSemester = catchAsync(async(req,res)=>{

    const result = await academicSemesterServices.updateAcademicSemesterIntoDB(req.params.id,req.body)

    sendResponse(res,{
        statusCode: 200,
        success: true,
        message: 'Academic semester updated successfully',
        data: result,
    })
})



export const AcademicSemesterController = {
    createAcademicSemester,getAllAcademicSemester,getSingleAcademicSemester,updateAcademicSemester,
}