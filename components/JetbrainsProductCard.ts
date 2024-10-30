import {Locator, Page} from "@playwright/test";
import { PricesBlock } from "../components/pricesBlock"

export class JetbrainsProductCard {
    private page: Page;
    private baseSelector: string;

    constructor(page: Page, subscriptionName: string) {
        this.page = page;
        this.baseSelector = `//div[@class="wt-css-content-switcher__block"]//h3[contains(text(), "${subscriptionName}")]/ancestor::div[contains(@data-test, 'product-card')]`;
    }

    get title(): Locator {
        return this.page.locator(`${this.baseSelector}//h3`);
    }

    get priceTag() {
        return this.page.locator(`${this.baseSelector}//div[@data-test="product-price"]`);
    }

    get buyButton() {
        return this.page.locator(`${this.baseSelector}//a[@data-test="product-card-footer-buy-button"]`)
    }

    get checkbox() {
        return this.page.locator(`${this.baseSelector}//span[@data-test="checkbox"]`)
    }

    get getQuoteLink() {
        return this.page.locator(`${this.baseSelector}//a[contains(text(), 'Get quote')]`)
    }

    get learnMoreLink() {
        return this.page.locator(`${this.baseSelector}//a[contains(text(), 'Learn more')]`)
    }

    get pricesBlock() {
        return new PricesBlock(this.page, this.baseSelector);
    }

    async clickCheckbox() {
        await this.checkbox.click()
    }

    async clickBuyButton() {
        await this.buyButton.click()
    }

    async clickLinkByName(name: string){
        await this.page.locator(`${this.baseSelector}//a[contains(text(), '${name}')]`).click()
    }

}