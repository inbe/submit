import { SubmitAppPage } from './app.po';

describe('submit-app App', function() {
  let page: SubmitAppPage;

  beforeEach(() => {
    page = new SubmitAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
