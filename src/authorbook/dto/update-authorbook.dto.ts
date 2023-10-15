import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthorbookDto } from './create-authorbook.dto';

export class UpdateAuthorbookDto extends PartialType(CreateAuthorbookDto) {}
