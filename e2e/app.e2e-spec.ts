import { Dirctive1Page } from './app.po';

describe('dirctive1 App', () => {
  let page: Dirctive1Page;

  beforeEach(() => {
    page = new Dirctive1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
