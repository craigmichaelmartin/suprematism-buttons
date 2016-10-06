import { SuprematismButtonsPage } from './app.po';

describe('suprematism-buttons App', function() {
  let page: SuprematismButtonsPage;

  beforeEach(() => {
    page = new SuprematismButtonsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
