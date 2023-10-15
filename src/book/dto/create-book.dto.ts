import { IsString, IsInt } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsInt()
  genre_id: number;
}
