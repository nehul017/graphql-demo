import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LessonService } from './lesson.service';
import { LessonType } from './lesson.type';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query((returns) => LessonType)
  lesson(@Args('id') id: String) {
    return this.lessonService.getLesson(id);
  }
  @Query((returns) => [LessonType])
  lessons() {
    return this.lessonService.getAllLessons();
  }
  @Mutation((returns) => LessonType)
  createLesson(
    @Args('name') name: String,
    @Args('startDate') startDate: String,
    @Args('endDate') endDate: String,
  ) {
    return this.lessonService.createLesson(name, startDate, endDate);
  }
}
