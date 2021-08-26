import { Controller, Get, Post, Put, Param, Body } from '@nestjs/common';

@Controller('students')
export class StudentController {
  //get all students
  @Get()
  getAllStudents(): String {
    return 'list of all the students';
  }

  //get student by id:
  @Get('/:student_id')
  getStudentById(@Param('student_id') student_id: string): String {
    console.log('params', student_id);
    return `recieved student with id: ${student_id}`;
  }

  //create student
  @Post()
  createStudent(@Body() body): String {
    console.log('body: ', body);
    const { name, teacher_id } = body;
    return `student name: ${name} with teacherid: ${teacher_id}`;
  }

  //update the student
  @Put('/:student_id')
  updateStudentById(@Param() param, @Body() body): String {
    console.log('body: ', body);
    console.log(param, 'stud');
    const { student_id } = param;
    return `student updated successfully with id ${student_id}`;
  }
}
