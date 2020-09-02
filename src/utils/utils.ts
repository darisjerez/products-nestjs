export class Utils {
    private maxLengthCoupon: number;
    constructor(){
        this.maxLengthCoupon = 6;
    }
    generateCouponCode():string {
        const combination = ['A', 'B', 'C', 'D', 'F', 'G', 'H', 'I', 1, 4, 6, 8, 0];
        return combination.sort(()=>{return 0.5 - Math.random()}).slice(0, this.maxLengthCoupon).join('');
    }

    parseDate(date): number {
        return Date.parse(date);
    }

    calulateDiscount(discount, productPrice): number{
        const totalDiscount = (discount / 100) * productPrice;
        return productPrice - totalDiscount;
    }
 
}