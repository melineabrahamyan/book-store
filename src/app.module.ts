import { Module } from '@nestjs/common';
import { BookModule } from './book/book.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './book/entities/book.entity';
import { ConfigModule } from '@nestjs/config';
import { GenreModule } from './genre/genre.module';
import { GenreEntity } from './genre/entities/genre.entity';
import { AuthorModule } from './author/author.module';
import { AuthorEntity } from './author/entities/author.entity';
import { AuthorbookModule } from './authorbook/authorbook.module';
import { AuthorbookEntity } from './authorbook/entities/authorbook.entity';
import { UserModule } from './user/user.module';
import { UserEntity } from './user/entities/user.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        BookEntity,
        GenreEntity,
        AuthorEntity,
        AuthorbookEntity,
        UserEntity,
      ],
      synchronize: true,
    }),
    BookModule,
    GenreModule,
    AuthorModule,
    AuthorbookModule,
    UserModule,
  ],
})
export class AppModule {}
