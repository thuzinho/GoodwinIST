import { FreshmanNightPage } from './app.po';

describe('freshman-night App', () => {
  let page: FreshmanNightPage;

  beforeEach(() => {
    page = new FreshmanNightPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
