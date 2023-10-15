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
export class AuthorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(() => AuthorbookEntity, (auhorbook) => auhorbook.author, {
    onDelete: 'CASCADE',
  })
  books: AuthorbookEntity[];
}
