import { Controller, Post, Body, UsePipes, ValidationPipe, Get } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from 'src/schemas/product.schema';
import { CreateProductsDto } from '../dto/createProducts.dto';

@Controller('products')
export class ProductsController {
    constructor(private productsServices: ProductsService){}

    @Post()
    @UsePipes(ValidationPipe)
    createNewProduct(
        @Body() createProductDto: CreateProductsDto
    ): Promise<Product>{
       return this.productsServices.createProduct(createProductDto);
    }

    @Get()
    getAllProducts():Promise<Product[]>{
        return this.productsServices.findAllProducts();
    }
}
