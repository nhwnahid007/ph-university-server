import { Router } from "express";
import { AcademicSemesterController } from "./academicSemester.controller";
import validateRequest from "../../middleware/validateRequest";
import { academicSemesterValidations } from "./academicSemester.validation";

const router = Router();

router.post('/create-academic-semester', 
    validateRequest(academicSemesterValidations.createAcademicSemesterValidationSchema),
    AcademicSemesterController.createAcademicSemester);

export const AcademicSemesterRoutes = router;