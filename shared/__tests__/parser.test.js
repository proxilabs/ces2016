import { parse } from '../src/index';

test('Parse feed url', () => {
  expect(parse).toBeDefined();

  const url = 'https://facebook.github.io/react-native/blog/feed.xml';

  return parse(url).then((feed) => {
    expect(feed).toBeDefined();
    expect(feed.items).toBeDefined();
    expect(feed.items.length).toBeGreaterThan(0);
  });
});
