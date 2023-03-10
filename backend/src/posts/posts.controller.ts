import {Body, Controller, Get, Param, Post, UploadedFile, UseGuards, UseInterceptors} from '@nestjs/common';
import {PostsService} from "./posts.service";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {Posts} from "./posts.model";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {CreatePostsDto} from "./dto/create-posts.dto";
import {FileInterceptor} from "@nestjs/platform-express";
import {extname} from "path";
import { diskStorage } from 'multer';

@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService) {}

    @ApiOperation({summary: 'Get all posts'})
    @ApiResponse({status: 200, type: Posts})
    @Get('')
    getAll(){
        return this.postService.getAllPosts()
    }

    @ApiOperation({summary: "Get post by ID"})
    @ApiResponse({status: 200, type: Posts})
    @Get('/:id')
    getById(@Param('id') id: number){
        return this.postService.getPostById(id)
    }

    @ApiOperation({summary: 'Get post by Topic'})
    @ApiResponse({status: 200, type: Posts})
    @Get('/topic/:id')
    getByTopic(@Param('id') id:number){
        return this.postService.getPostByTopic(id)
    }
    @ApiOperation({summary: 'Create post'})
    @ApiResponse({status: 201, type: Posts})
    @UseGuards(JwtAuthGuard)
    @Post('/create')
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: './uploads/files',
                filename: (req, file, cb) => {
                    const randomName = Array(32)
                        .fill(null)
                        .map(() => Math.round(Math.random() * 16).toString(16))
                        .join('');
                    return cb(null, `${randomName}${extname(file.originalname)}`);
                },
            }),
        }),
    )
    create(@Body() postsDto: CreatePostsDto, @UploadedFile() file){
        return this.postService.createPost(postsDto, file)
    };

}
