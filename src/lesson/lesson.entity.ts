import { Column, Entity, ObjectIdColumn, PrimaryColumn } from 'typeorm';

@Entity()
export class lesson {
  @ObjectIdColumn()
  _id: String;

  @PrimaryColumn()
  id: String;

  @Column()
  name: String;

  @Column()
  startDate: String;

  @Column()
  endDate: String;
}
