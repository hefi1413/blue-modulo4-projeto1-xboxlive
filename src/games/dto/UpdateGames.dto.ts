import { PartialType } from '@nestjs/mapped-types';
import { CreateGamesDto } from './CreateGames.dto';

export class UpdateGamesDto extends PartialType(CreateGamesDto) {}