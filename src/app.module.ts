import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module'; // Importa el módulo de posts
import { CommentsModule } from './comentarios/comment.module';


@Module({
  imports: [AuthModule, PostsModule, CommentsModule], // Importa tanto el módulo de autenticación como el módulo de posts
})
export class AppModule {}
