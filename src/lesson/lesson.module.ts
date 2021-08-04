import { Module } from '@nestjs/common';
import { LessonResolver } from './lesson.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonService } from './lesson.service';
import { lesson } from './lesson.entity';

@Module({
  imports: [TypeOrmModule.forFeature([lesson])],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
