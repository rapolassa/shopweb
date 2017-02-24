import { SwedShopWebV2Page } from './app.po';

describe('swed-shop-web-v2 App', function() {
  let page: SwedShopWebV2Page;

  beforeEach(() => {
    page = new SwedShopWebV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
