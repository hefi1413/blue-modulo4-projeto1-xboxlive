import { PartialType } from '@nestjs/mapped-types';
import { CreateGendersDto } from './CreateGenders.dto';

export class UpdateGendersDto extends PartialType(CreateGendersDto) {}