import { Controller, Get, Post } from '@nestjs/common';

//decorator
@Controller('teachers/:teacher_id/students')
export class TeacherStudents {
  @Get()
  getStudents() {
    return 'all students assosiated with teacher.';
  }

  //edit the perticular student information
  @Post()
  updateStudent() {
    return 'student updated successfully!';
  }
}
