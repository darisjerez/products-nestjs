import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Coupon } from 'src/schemas/coupon.schema';
import { Model } from 'mongoose';
import { CreateCouponDto } from 'src/dto/createCoupon.dto';
import { Utils } from '../utils/utils';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class CouponsService {
    constructor(
        @InjectModel(Coupon.name) private CouponModel: Model<Coupon>,
        
    ){}

    async createNewCoupon(createCouponDto: CreateCouponDto):Promise<Coupon>{
        const couponCreated = new this.CouponModel(createCouponDto);
        couponCreated.code = new Utils().generateCouponCode();
        couponCreated.creationTime = new Date().toISOString();
        return await couponCreated.save();
    }

    async retrieveAllCoupons(): Promise<Coupon[]>{
        return await this.CouponModel.find().exec();
    }

    async findCouponByCode(couponCode): Promise<Coupon>{
        const foundCoupon = await this.CouponModel.findOne({code: couponCode});
        if(!foundCoupon){
            throw new NotFoundException(`Coupon not found with code: ${couponCode}`);
        }
        return foundCoupon;
    }
    @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
    async deleteCouponByDate(): Promise<void>{
        await this.CouponModel.deleteMany({expirationTime: { $lt : Date.parse(new Date().toISOString())}});
    }

    async updateTimesUsedOnCoupon(coupon: Coupon): Promise<void>{
        coupon.timesUsed += 1;
        await coupon.save();
    }

    @Cron(CronExpression.EVERY_8_HOURS)
    async updateExpiredProperty(coupon: Coupon): Promise<void>{
        if(coupon.expirationTime <= Date.parse(new Date().toISOString())){
            coupon.expired = true;
            await coupon.save();
        }
    }
}
