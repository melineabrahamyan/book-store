import { IsString, IsInt } from 'class-validator';

export class CreateGenreDto {
  @IsString()
  name: string;
}
