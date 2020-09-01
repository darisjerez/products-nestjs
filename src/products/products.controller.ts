import { Controller, Post, Body, UsePipes, ValidationPipe, Get, Param, Patch, Delete, Query } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from 'src/schemas/product.schema';
import { CreateProductsDto } from '../dto/createProducts.dto';
import { SearchCriteriaDto } from '../dto/searchCriteria.dto';

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
    getAllProducts(
        @Query(ValidationPipe) filterDto: SearchCriteriaDto
    ):Promise<Product[]>{
        return this.productsService.findAllProducts(filterDto);
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
    @Get('/:id/:couponCode')
    async applyDiscount(
        @Param('id') id: string,
        @Param('couponCode') couponCode: string
    ): Promise<Product>{
        return this.productsService.applyDiscount(id, couponCode);
    }

}


