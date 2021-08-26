import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from '../student/student.controller';
import { TeacherController } from '../teacher/teacher.controller';
import { TeacherStudents } from '../teacher/student.controller';
import {UsersModule} from '../users/users.module'
import { ContactsModule } from '../contacts/contacts.module';
import {PhotoModule} from '../photo/photo.module'
@Module({
  imports: [ContactsModule],
  controllers: [
    AppController,
    StudentController,
    TeacherController,
    TeacherStudents,
  ],
  providers: [AppService],
})
export class AppModule {}
