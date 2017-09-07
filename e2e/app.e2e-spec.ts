import { Angular4PracticePage } from './app.po';

describe('angular4-practice App', () => {
  let page: Angular4PracticePage;

  beforeEach(() => {
    page = new Angular4PracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
