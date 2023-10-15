import { Injectable } from '@nestjs/common';
import { CreateAuthorbookDto } from './dto/create-authorbook.dto';
import { UpdateAuthorbookDto } from './dto/update-authorbook.dto';

@Injectable()
export class AuthorbookService {
  create(createAuthorbookDto: CreateAuthorbookDto) {
    return 'This action adds a new authorbook';
  }

  findAll() {
    return `This action returns all authorbook`;
  }

  findOne(id: number) {
    return `This action returns a #${id} authorbook`;
  }

  update(id: number, updateAuthorbookDto: UpdateAuthorbookDto) {
    return `This action updates a #${id} authorbook`;
  }

  remove(id: number) {
    return `This action removes a #${id} authorbook`;
  }
}
