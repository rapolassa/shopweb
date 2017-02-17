import { ShopwebPage } from './app.po';

describe('shopweb App', () => {
  let page: ShopwebPage;

  beforeEach(() => {
    page = new ShopwebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
