import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from 'src/schemas/product.schema';
import { Model } from 'mongoose';
import { CreateProductsDto } from '../dto/createProducts.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private ProductModel: Model<Product>){}

    async createProduct(createProductDto: CreateProductsDto): Promise<Product>{
        const createdProduct = new this.ProductModel(createProductDto);
        return await createdProduct.save();
    }

    async findAllProducts(): Promise<Product[]>{
        return await this.ProductModel.find().exec();
    }

    async getProductById(id: string):Promise<Product>{
        
        const products = await this.findAllProducts();

        const foundProduct = products.find(product => product._id == id);

        if (!foundProduct) {
            throw new NotFoundException(`Product with id ${id} was not found`);  
        }

        return foundProduct;

    }

    async editProduct(id: string, createProductDto: CreateProductsDto):Promise<Product>{
        const product = await this.getProductById(id);
        
        if (Object.keys(createProductDto).length === 0) {
            throw new BadRequestException();
        }

        this.checkPropExists(createProductDto, product);

        await product.save();

        return product;
    }

    async deleteProduct(id: string): Promise<any>{
        const product = await this.getProductById(id);
         await product.deleteOne();
        return { message: `Product with id ${id} was deleted`, status: "Success" };
    }

    checkPropExists(data, target){
        
            if(data.title){
                target.title = data.title
            }
            if (data.price) {
                target.price = data.price;
            }
            if (data.sale) {
                target.sale = data.sale;
            }
            if (data.description) {
                target.description = data.description;
            }
            if (data.salePrice) {
                target.salePrice = data.salePrice;
            }
            if (data.freeShipping) {
                target.freeShipping = data.freeShipping;
            }
            if (data.category) {
                target.category = data.category;
            }
            if (data.quantity) {
                target.quantity = data.quantity
            }
            if (data.images && data.images.length > 0) {
                target.images.push(data.images.values())
            }
    }
}   

