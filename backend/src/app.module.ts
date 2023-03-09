import {Module} from "@nestjs/common";
import {SequelizeModule} from "@nestjs/sequelize";
import { UsersModule } from './users/users.module';
import {ConfigModule} from "@nestjs/config";
import * as process from "process";
import {User} from "./users/users.model";
import { RolesModule } from './roles/roles.module';
import {Role} from "./roles/roles.model";
import {UserRoles} from "./roles/user-roles.model";
import { AuthModule } from './auth/auth.module';
import { TopicsModule } from './topics/topics.module';
import { PostsModule } from './posts/posts.module';
import {Topics} from "./topics/topics.model";
import {Posts} from "./posts/posts.model";


@Module({
    controllers: [],
    providers: [],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
            SequelizeModule.forRoot({
            dialect: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username: String(process.env.POSTGRES_USER),
            password: String(process.env.POSTGRES_PASSWORD),
            database: process.env.POSTGRES_DB,
            models: [User, Role, UserRoles, Topics, Posts],
            autoLoadModels: true
    }),
            UsersModule,
            RolesModule,
            AuthModule,
            TopicsModule,
            PostsModule,
    ],
})
export class AppModule{

}