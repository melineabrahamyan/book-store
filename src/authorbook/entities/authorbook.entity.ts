import { generateKey } from 'crypto';
import { AuthorEntity } from 'src/author/entities/author.entity';
import { BookEntity } from 'src/book/entities/book.entity';
import { GenreEntity } from 'src/genre/entities/genre.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class AuthorbookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => AuthorEntity, (author) => author.books)
  @JoinColumn({ name: 'author_id', referencedColumnName: 'id' })
  author: AuthorEntity;

  @ManyToOne(() => BookEntity, (book) => book.authors)
  @JoinColumn({ name: 'book_id', referencedColumnName: 'id' })
  book: GenreEntity;
}
