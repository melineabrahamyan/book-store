import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GenreEntity } from './entities/genre.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(GenreEntity)
    private genreRepository: Repository<GenreEntity>,
  ) {}

  async create(createGenreDto: CreateGenreDto): Promise<GenreEntity> {
    const genre = this.genreRepository.create({
      name: createGenreDto.name,
    });

    return await this.genreRepository.save(genre);
  }

  async findAll(): Promise<GenreEntity[]> {
    return await this.genreRepository.find({
      relations: ['books'],
    });
  }

  async findOne(id: number): Promise<GenreEntity> {
    return await this.genreRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateGenreDto: UpdateGenreDto) {
    return `This action updates a #${id} genre`;
  }

  remove(id: number) {
    return `This action removes a #${id} genre`;
  }
}
