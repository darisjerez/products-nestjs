import { IsNotEmpty, IsNumber, IsBoolean } from "class-validator";

export class CreateCouponDto {

    
    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsNumber()
    @IsNotEmpty()
    timesUsed: number;

    @IsNumber()
    @IsNotEmpty()
    limitOfUses: number;

    @IsNotEmpty()
    @IsNumber()
    expirationTime: number;

    @IsNotEmpty()
    @IsBoolean()
    expired: boolean

}