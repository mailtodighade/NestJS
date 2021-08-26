import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from '../student/student.controller';
import { TeacherController } from '../teacher/teacher.controller';
import { TeacherStudents } from '../teacher/student.controller';
@Module({
  imports: [],
  controllers: [
    AppController,
    StudentController,
    TeacherController,
    TeacherStudents,
  ],
  providers: [AppService],
})
export class AppModule {}
