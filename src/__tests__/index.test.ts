import meeow from '../index';

test('getUrl', () => {
  expect(meeow.getUrl(200, 300)).toBe('http://placekitten.com/200/300');

  expect(meeow.getUrl(200, 300, true)).toBe('http://placekitten.com/g/200/300');
});
