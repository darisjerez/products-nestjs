import { Controller, Post, UsePipes, ValidationPipe, Body, Get, Param } from '@nestjs/common';
import { CouponsService } from '../coupons/coupons.service';
import { Coupon } from 'src/schemas/coupon.schema';
import { CreateCouponDto } from '../dto/createCoupon.dto';

@Controller('coupons')
export class CouponsController {
    constructor(private couponService: CouponsService){}


    @Post()
    @UsePipes(ValidationPipe)
    async createNewCoupon(
        @Body() createCouponDto: CreateCouponDto
    ):Promise<Coupon>{
        return this.couponService.createNewCoupon(createCouponDto);
    }

    @Get()
    async retrieveAllCoupons(): Promise<Coupon[]>{
        return this.couponService.retrieveAllCoupons();
    }

    @Get('/:couponCode')
    async getCouponByCode(
        @Param('couponCode') code: string
    ): Promise<Coupon>{
        return this.couponService.findCouponByCode(code);
    }
}
