import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://alexismf2802:4ZvZB8lejJLbjyzk@tasksbd.3qzyn6e.mongodb.net/'),
  TasksModule],  
})
export class AppModule {}
