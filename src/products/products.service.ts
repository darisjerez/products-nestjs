import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from 'src/schemas/product.schema';
import { Model } from 'mongoose';
import { CreateProductsDto } from '../dto/createProducts.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private ProductModel: Model<Product>){}

    async createProduct(createProductDto: CreateProductsDto): Promise<Product>{
        const createdProduct = new this.ProductModel(createProductDto);
        return createdProduct.save();
    }

    async findAllProducts(): Promise<Product[]>{
        return this.ProductModel.find().exec();
    }
}
