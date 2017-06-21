import { TemplateAppPage } from './app.po';

describe('template-app App', () => {
  let page: TemplateAppPage;

  beforeEach(() => {
    page = new TemplateAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
