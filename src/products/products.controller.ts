import { Controller, Post, Body, UsePipes, ValidationPipe, Get, Param, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from 'src/schemas/product.schema';
import { CreateProductsDto } from '../dto/createProducts.dto';

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService){}

    @Post()
    @UsePipes(ValidationPipe)
    createNewProduct(
        @Body() createProductDto: CreateProductsDto
    ): Promise<Product>{
       return this.productsService.createProduct(createProductDto);
    }

    @Get()
    getAllProducts():Promise<Product[]>{
        return this.productsService.findAllProducts();
    }
    
    @Get('/:id')
    getProductById(
        @Param('id') id: string
        ): Promise<Product>{
        return this.productsService.getProductById(id);
    }

    @Patch('/:id')
    editProduct(
        @Param('id') id: string,
        @Body() createProductDto: CreateProductsDto
    ): Promise<Product>{
        return this.productsService.editProduct(id, createProductDto);
    }

    @Delete('/:id')
    deleteProduct(
        @Param('id') id:string
    ): Promise<string>{
        return this.productsService.deleteProduct(id);
        
    }
}


