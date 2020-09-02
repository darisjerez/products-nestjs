import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from '../schemas/product.schema';
import { CouponsService } from '../coupons/coupons.service';
import { CouponsModule } from '../coupons/coupons.module';

@Module({
  imports: [MongooseModule.forFeature([{name: Product.name, schema: ProductSchema}]), CouponsModule],
  providers: [ProductsService],
  controllers: [ProductsController]
})
export class ProductsModule {}
