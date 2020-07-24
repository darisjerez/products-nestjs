import { IsNotEmpty, IsOptional, IsString } from 'class-validator';



export class SearchCriteriaDto {
        @IsOptional()
        @IsNotEmpty()
        @IsString()
        search: string;
}