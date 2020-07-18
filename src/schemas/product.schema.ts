import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


@Schema()
export class Product extends Document {

    @Prop()
    id: string;

    @Prop()
    title: string;

    @Prop()
    price: number;

    @Prop()
    description: string;

    @Prop()
    freeShipping: boolean;

    @Prop()
    category: string;

    @Prop()
    quantity: number;

    @Prop()
    availability: boolean;

}

export const ProductSchema = SchemaFactory.createForClass(Product);