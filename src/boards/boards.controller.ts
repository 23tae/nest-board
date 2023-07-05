import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './boards.model';

@Controller('boards')
export class BoardsController {
    constructor(private baordsService: BoardsService) {}

    @Get()
    getAllBoard(): Board[] {
        return this.baordsService.getAllBoards();
    }
}
