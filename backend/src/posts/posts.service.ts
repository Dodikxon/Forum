import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Posts} from "./posts.model";
import {CreatePostsDto} from "./dto/create-posts.dto";

@Injectable()
export class PostsService {
    constructor(@InjectModel(Posts) private postRepository: typeof Posts) {}

    async createPost(dto: CreatePostsDto, file){
        const imageName = file ? file.filename : '';
        dto.image = imageName;
        const post = await this.postRepository.create(dto)
        return post
    }

    async getAllPosts(){
        const post = await this.postRepository.findAll({include: {all: true}})
        return post
    }

    async getPostById(id: number){
        const post = await this.postRepository.findOne({where: {id}, include: {all: true}})
        return post
    }

    async getPostByTopic(topicId: number){
        const post = await this.postRepository.findAll({where: {topicId}, include: {all: true}})
        return post
    }

}
