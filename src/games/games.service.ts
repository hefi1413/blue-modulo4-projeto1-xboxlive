import { Injectable, NotFoundException } from '@nestjs/common';
import { Games } from './entities/games.entity';
import { CreateGamesDto } from './dto/CreateGames.dto';
import { UpdateGamesDto } from './dto/UpdateGames.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GamesService {
    constructor(private prisma :PrismaService ) {}

    findAll() {
        return this.prisma.games.findMany();
    }

    async findById(_id: number) {
        const record =await this.prisma.games.findUnique({ where: { id: _id, } });

        if (!record) {
            throw new NotFoundException(`Registro ID:${_id} não localizado.`)
        };
        return record;                    
    }

    create(dto: CreateGamesDto) {
        const games: Games = { ...dto };
        return this.prisma.games.create( { data: games });
    }

    async update(_id: number, dto: UpdateGamesDto) {
        const _data: Partial<Games> = { ...dto };

        const record =await this.prisma.games.findUnique({ where: { id: _id, } });

        if (!record) {
            throw new NotFoundException(`Registro ID:'${_id}' não localizado.`)
        };

        return this.prisma.games.update({
            where: { id: _id },
            data : _data,
        });    
    }

    async delete(_id: number,) {
        const record =await this.prisma.games.findUnique({ where: { id: _id, } });

        if (!record) {
            throw new NotFoundException(`Registro ID:'${_id}' não localizado.`)
        };

        return this.prisma.games.delete({
            where: { id: _id },
        });    
    }
    
}
