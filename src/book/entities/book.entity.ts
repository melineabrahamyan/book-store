import { AuthorbookEntity } from 'src/authorbook/entities/authorbook.entity';
import { GenreEntity } from 'src/genre/entities/genre.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';

@Entity()
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  genre_id: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @ManyToOne(() => GenreEntity, (genre) => genre.books)
  @JoinColumn({ name: 'genre_id', referencedColumnName: 'id' })
  genre: GenreEntity;

  @OneToMany(() => AuthorbookEntity, (auhorbook) => auhorbook.book, { onDelete: 'CASCADE' })
  authors: AuthorbookEntity[];
}
