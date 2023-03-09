import {Module} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {AuthModule} from "../auth/auth.module";
import {User} from "../users/users.model";
import {Posts} from "./posts.model";
import {Topics} from "../topics/topics.model";

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [
    SequelizeModule.forFeature([Posts, User, Topics]),
    AuthModule,
  ],
  exports: [
    PostsService,
  ]
})
export class PostsModule {}
