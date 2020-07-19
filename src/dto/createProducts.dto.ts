
import { IsNotEmpty, IsBoolean, IsString, MinLength, MaxLength, IsInt, ValidateIf, IsArray } from "class-validator";



export class CreateProductsDto {

    id: string;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsInt()
    price: number;

    @IsNotEmpty()
    @IsBoolean()
    sale: boolean;
    
    @ValidateIf(props => props.sale === true)
    @IsNotEmpty()
    @IsInt()
    salePrice: number;

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
    @IsInt()
    quantity: number;

    @ValidateIf(props => props.quantity > 0)
    @IsNotEmpty()
    @IsBoolean()
    availability: boolean;

    @IsNotEmpty()
    @IsArray()
    images: [];
}