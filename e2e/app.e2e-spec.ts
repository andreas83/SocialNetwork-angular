import { SocialNetworkAngularPage } from './app.po';

describe('social-network-angular App', () => {
  let page: SocialNetworkAngularPage;

  beforeEach(() => {
    page = new SocialNetworkAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
