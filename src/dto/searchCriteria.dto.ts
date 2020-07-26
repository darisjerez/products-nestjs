import { IsNotEmpty, IsOptional, IsString } from 'class-validator';



export class SearchCriteriaDto {
        @IsOptional()
        @IsNotEmpty()
        @IsString()
        search: string;

        @IsOptional()
        @IsNotEmpty()
        @IsString()
        freeShipping: string;

        @IsOptional()
        @IsNotEmpty()
        @IsString()
        sale: boolean;
}