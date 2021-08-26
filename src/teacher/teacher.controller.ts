import { Controller, Get, Post, Put } from '@nestjs/common';

@Controller('teacher')
export class TeacherController {
  //get all teachers
  @Get()
  getAllTeachers() {
    return 'list of all teachers';
  }
  //get teacher by id:
  @Get('/:teacher_id')
  getStudentById(): String {
    return 'teacher by id...';
  }

  //create teacher
  @Post()
  createStudent(): String {
    return 'teacher created by me...';
  }

  //update the teacher
  @Put('/:teacher_id')
  updateStudentById(): String {
    return 'teacher updated successfully.';
  }
}
