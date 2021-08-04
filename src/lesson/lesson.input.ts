import { Field, InputType } from '@nestjs/graphql';
import { MinLength, IsDateString } from 'class-validator';

@InputType()
export class CreateLessonInput {
  @MinLength(1)
  @Field()
  name: String;

  @IsDateString()
  @Field()
  startDate: String;

  @IsDateString()
  @Field()
  endDate: String;
}
