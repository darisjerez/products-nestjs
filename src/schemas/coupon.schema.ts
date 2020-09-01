import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Coupon extends Document {
    @Prop()
    code: string;

    @Prop()
    amount: number;

    @Prop()
    timesUsed: number;

    @Prop()
    limitOfUses: number;
    
    @Prop()
    creationTime: string;

    @Prop()
    expirationTime: number;

}

export const CouponSchema = SchemaFactory.createForClass(Coupon);
