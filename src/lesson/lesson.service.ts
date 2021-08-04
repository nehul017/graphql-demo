import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { lesson } from './lesson.entity';
import { Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(lesson) private lessonRepository: Repository<lesson>,
  ) {}

  async getLesson(id): Promise<lesson> {
    return this.lessonRepository.findOne({ id });
  }

  async getAllLessons(): Promise<lesson[]> {
    return this.lessonRepository.find();
  }

  async createLesson(name, startDate, endDate): Promise<lesson> {
    const lesson = this.lessonRepository.create({
      id: uuid(),
      name,
      startDate,
      endDate,
    });

    return this.lessonRepository.save(lesson);
  }
}
