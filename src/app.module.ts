import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://alexismf2802:6Dz66x3WkHmUgKOF@tasksbd.cxmwogd.mongodb.net/'),
  TasksModule],  
})
export class AppModule {}
