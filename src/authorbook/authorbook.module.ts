import { Module } from '@nestjs/common';
import { AuthorbookService } from './authorbook.service';
import { AuthorbookController } from './authorbook.controller';

@Module({
  controllers: [AuthorbookController],
  providers: [AuthorbookService],
})
export class AuthorbookModule {}
