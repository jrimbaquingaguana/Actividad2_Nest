import { Module } from '@nestjs/common';
import { CommentsController } from './comentarios.controller';
import { CommentsService } from './comentarios.service';

@Module({
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
