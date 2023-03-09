import {forwardRef, Module} from '@nestjs/common';
import { TopicsController } from './topics.controller';
import { TopicsService } from './topics.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Posts} from "../posts/posts.model";
import {User} from "../users/users.model";
import {Topics} from "./topics.model";
import {AuthModule} from "../auth/auth.module";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {RolesModule} from "../roles/roles.module";

@Module({
  controllers: [TopicsController],
  providers: [TopicsService],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Posts, Topics]),
    RolesModule,
    forwardRef(() => AuthModule),
  ],
  exports: [
    TopicsService,
  ]
})
export class TopicsModule {}
