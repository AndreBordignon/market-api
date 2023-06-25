import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cat.service';
import { Cat } from './interfaces/cat.interface';
import { ApiOperation } from '@nestjs/swagger';

@Controller('cats')
export class CatsController {
  constructor(private catsService: CatsService) {}

  @Post()
  @ApiOperation({ summary: 'Create cat' })
  async create(cat) {
    // this.catsService.create(cat);
  }

  @Get()
  async findAll() {
    this.catsService.findAll();
  }
  @Get(':name')
  @ApiOperation({ summary: 'Find one' })
  async findOne(name) {
    // this.catsService.findOne(name);
  }
}
