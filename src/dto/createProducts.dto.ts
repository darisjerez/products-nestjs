
import { IsNotEmpty, IsNumber, IsBoolean, IsString, MinLength, MaxLength } from "class-validator";


export class CreateProductsDto {

    id: string;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsNumber()
    price: number;

    @IsNotEmpty()
    @MinLength(30)
    @MaxLength(300)
    description: string;

    @IsNotEmpty()
    @IsBoolean()
    freeShipping: boolean;

    @IsNotEmpty()
    category: string;

    @IsNotEmpty()
    @IsNumber()
    quantity: number;

    @IsNotEmpty()
    @IsBoolean()
    availability: boolean;

}