import {Body, Controller, Get, Param, Post, UseGuards} from '@nestjs/common';
import {PostsService} from "./posts.service";
import {ApiOperation, ApiResponse} from "@nestjs/swagger";
import {Posts} from "./posts.model";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {CreatePostsDto} from "./dto/create-posts.dto";

@Controller('posts')
export class PostsController {
    constructor(private postService: PostsService) {}
    @ApiOperation({summary: 'Create post'})
    @ApiResponse({status: 201, type: Posts})
    @UseGuards(JwtAuthGuard)
    @Post('/create')
    create(@Body() postsDto: CreatePostsDto){
        return this.postService.createPost(postsDto)
    }

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
}
