import { parse } from '../src/index';

describe('Parse feed url', () => {
  it('is defined', () => {
    expect(parse).toBeDefined();
  });

  it('Succeed with a valid feed url', () => {
    const url = 'https://facebook.github.io/react-native/blog/feed.xml';

    return parse(url).then((feed) => {
      expect(feed).toBeDefined();
      expect(feed.items).toBeDefined();
      expect(feed.items.length).toBeGreaterThan(0);
    });
  });

  it('Failed with an invalid feed url', () => {
    const url = 'http://notavalidfeed.fr';

    return parse(url).then((data) => {
      expect(data).toBeUndefined();
    }).catch((error) => {
      expect(error).toBeDefined();
    });
  });
});
