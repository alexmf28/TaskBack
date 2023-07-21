import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from '../schemas/task.schema';
import { Model } from 'mongoose';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private TaskModel: Model<Task>) {}

  findAll() {
    return this.TaskModel.find();
  }

  async create(createdTask: CreateTaskDto) {
    const newTask = new this.TaskModel(createdTask);
    return newTask.save();
  }

  async findById(id: string) {
    return this.TaskModel.findById(id);
  }

  async update(id: string, updateTask: UpdateTaskDto) {
    return this.TaskModel.findByIdAndUpdate(id, updateTask, { new:true});
  }

  async delete(id: string) {
    return this.TaskModel.findByIdAndDelete(id);
  }
}
