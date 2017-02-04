import { CasheerPage } from './app.po';

describe('casheer App', function() {
  let page: CasheerPage;

  beforeEach(() => {
    page = new CasheerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
