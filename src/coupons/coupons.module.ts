import { Module } from '@nestjs/common';
import { CouponsController } from './coupons.controller';
import { CouponsService } from './coupons.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Coupon, CouponSchema } from '../schemas/coupon.schema';




@Module({
    imports:[MongooseModule.forFeature([{name: Coupon.name, schema: CouponSchema}])],
    
    providers: [CouponsService],

    controllers:[CouponsController]
})
export class CouponsModule {}
