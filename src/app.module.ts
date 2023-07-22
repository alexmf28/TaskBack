import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://alexismf2802:alx280220.@tasksbd.1abk6ly.mongodb.net/'),
  TasksModule],  
})
export class AppModule {}
