import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthorbookService } from './authorbook.service';
import { CreateAuthorbookDto } from './dto/create-authorbook.dto';
import { UpdateAuthorbookDto } from './dto/update-authorbook.dto';

@Controller('authorbook')
export class AuthorbookController {
  constructor(private readonly authorbookService: AuthorbookService) {}

  @Post()
  create(@Body() createAuthorbookDto: CreateAuthorbookDto) {
    return this.authorbookService.create(createAuthorbookDto);
  }

  @Get()
  findAll() {
    return this.authorbookService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.authorbookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthorbookDto: UpdateAuthorbookDto) {
    return this.authorbookService.update(+id, updateAuthorbookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authorbookService.remove(+id);
  }
}
