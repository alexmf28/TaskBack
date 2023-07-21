import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  ConflictException,
  NotFoundException,
  HttpCode,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';
import { error } from 'console';

@Controller('tasks')
export class TasksController {
  constructor(private taskservice: TasksService) {}

  @Get()
  findAll() {
    return this.taskservice.findAll();    
  }

  @Get(':id')
  async findOne(@Param('id') id:string ){
    const task = await this.taskservice.findById(id);
    if(!task) throw new NotFoundException('no se encontro la tarea'); 
    return task; 
  }

  @Post()
  async create(@Body() body: CreateTaskDto) {
    try{
      return await this.taskservice.create(body);
    } catch (error){
      if (error.code === 11000){
        throw new ConflictException('tarea ya existe')
      }      
    }
    throw error
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateTaskDto) {
    const task = await this.taskservice.update(id, body);
    if(!task) throw new NotFoundException('no se encontro la tarea');
    return task;
  }

  @Delete(':id')
  @HttpCode(204)
  async deleteById(@Param('id') id: string) {
    const task = await this.taskservice.delete(id);
    if(!task) throw new NotFoundException('no se encontro la tarea');
    return task;
  }
}
