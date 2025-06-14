import { Router } from "express";
import { AcademicSemesterController } from "./academicSemester.controller";
import validateRequest from "../../middleware/validateRequest";
import { academicSemesterValidations } from "./academicSemester.validation";

const router = Router();

router.post('/create-academic-semester', 
    validateRequest(academicSemesterValidations.createAcademicSemesterValidationSchema),
    AcademicSemesterController.createAcademicSemester);

    router.get('/',AcademicSemesterController.getAllAcademicSemester);
    router.get('/:id',AcademicSemesterController.getSingleAcademicSemester);
    router.patch('/:id',AcademicSemesterController.updateAcademicSemester);

export const AcademicSemesterRoutes = router;