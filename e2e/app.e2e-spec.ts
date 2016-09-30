import { OddRacePage } from './app.po';

describe('odd-race App', function() {
  let page: OddRacePage;

  beforeEach(() => {
    page = new OddRacePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
