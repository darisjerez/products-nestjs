import { Injectable } from '@nestjs/common';
import { Product } from '../schemas/product.schema';
import { ProductsService } from '../products/products.service';
import { MakePurchaseDto } from 'src/dto/makePurchase.dto';

@Injectable()
export class TransactionsService {
    constructor(private productService: ProductsService){}

    async addNewCartItem(user, productId: string): Promise<string[]>{
        const cart = user.cart.items;
        const product = await this.productService.getProductById(productId);
        cart.push(product);
        await user.save();
        return cart;
    }
    async deleteItemFromCart(user, productId: string): Promise<any>{
        const cart = user.cart.items;
        user.cart.items = cart.filter(item=> item.id !== productId);
        await user.save();

        return { message:`Product with ID: ${productId} was removed from your Cart.`}
    }

    async emptyCart(user): Promise<any>{
        const cart = user.cart;
        cart.totalPrice = 0;
        cart.items.length = 0;
        await user.save();

        return { message: "Your Cart is now Empty"}
    }


    async makeAPurchase(user, makePurchaseDto: MakePurchaseDto): Promise<void>{
        
    }

    async approvePayment(userId, card){
          const user = await
    }



}
