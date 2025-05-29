const { get } = require("http");
const { text } = require("stream/consumers");

class DashboardPage{
    constructor(page){
        this.page = page;
        this.dashboardPageTitle = page.locator("i[class='fa fa-home']");
        this.plusIcon = page.locator("i[class='fa fa-plus']");
        this.prdouctDomain = page.locator("a[href*='/category_products/6']");
        this.productName = page.locator(".productinfo.text-center p");
        this.addToCartButton = page.locator("a[data-product-id*='37']").first();
        this.confirmationPopup = page.locator("div[id='cartModal'] p:nth-child(1)");
        this.cartButton = page.locator("div[id='cartModal'] p:nth-child(2)");
        this.cartDescription = page.locator(".cart_description");
        this.checkoutButton = page.locator("a[class='btn btn-default check_out']");
        this.placeOrderButton = page.locator("a[class*='btn btn-default check_out']");
        this.nameOnCard = page.locator("input[name='name_on_card']");
        this.cardNumber = page.locator("input[name='card_number']");
        this.cvc = page.locator("input[name='cvc']");
        this.expirationMonth = page.locator("input[name='expiry_month']");
        this.expirationYear = page.locator("input[name='expiry_year']");
        this.payAndConfirmOrderButton = page.locator("#submit");
        this.orderConfirmationMessage = page.locator(".title.text-center");
       
    }

   async getDashboardPageTitle() {
        return await this.dashboardPageTitle.textContent();
    }
   async clickPlusIcon() {
        await this.plusIcon.nth(1).click();
    }
    async clickProductDomain() {
          await this.prdouctDomain.click();
     }
    // async getProductName(productName) {
    //     const products = await this.page.locator(".productinfo.text-center p");
    //     const count = await products.count();
    //     for (let i = 0; i < count; i++) {
    //         const text = await products.nth(i).textContent();
    //         return text;
    //     } 
    //     console.log(text);
    //     throw new Error(`Product name "${productName}" not found in the text: ${text}`);
    // }
    async searchProductAddCart(productName) {
        const products = await this.page.locator(".productinfo.text-center p");
        const count = await products.count();
        for (let i = 0; i < count; i++) {
            if (await products.nth(i).textContent() === productName) {
                await this.addToCartButton.click();
                
            }
            
        }
    }
    
    async getConfirmationPopupText() {
        return await this.confirmationPopup.textContent();
    }
    async clickCartButton() {
        await this.cartButton.click();
    }
    async getCartDescription() {
        return await this.cartDescription.textContent();
    }
    async clickCheckoutButton() {
        await this.checkoutButton.click();
    }
    async clickPlaceOrderButton() {
        await this.placeOrderButton.click();
    }
    async enterNameOnCard(cardHolderName) {
        await this.nameOnCard.fill(cardHolderName);
    }
    async enterCardNumber(cardNumber) {
        await this.cardNumber.fill(cardNumber);
    }
    async enterCVC(cvv) {
        await this.cvc.fill(cvv);
    }
    async enterExpirationMonth(expiryMonth) {
        await this.expirationMonth.fill(expiryMonth);
    }
    async enterExpirationYear(expiryYear) {
        await this.expirationYear.fill(expiryYear);
    }
    async clickPayAndConfirmOrderButton() {
        await this.payAndConfirmOrderButton.click();
    }
    async getOrderConfirmationMessage() {
        return await this.orderConfirmationMessage.textContent();
    }

}module.exports = { DashboardPage };