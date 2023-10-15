import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookEntity } from './entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(BookEntity)
    private bookRepository: Repository<BookEntity>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<BookEntity> {
    const book = this.bookRepository.create({
      title: createBookDto.title,
      genre_id: createBookDto.genre_id,
    });

    return await this.bookRepository.save(book);
  }

  async findAll(): Promise<BookEntity[]> {
    return await this.bookRepository.find({
      relations: ['authors'],
    });
  }

  async findOne(id: number): Promise<BookEntity> {
    return await this.bookRepository.findOne({
      where: { id },
    });
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
