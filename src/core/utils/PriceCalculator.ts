export class PriceCalculator {
    public static readonly TRANSFER_DISCOUNT_PERCENTAGE = 10;

    public static calculateTransferPrice(price: number): number {
        const discountAmount = (price * this.TRANSFER_DISCOUNT_PERCENTAGE) / 100;
        return price - discountAmount;
    }
}
