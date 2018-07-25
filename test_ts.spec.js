const tscVersion = require('./typescript').tscVersion;

describe('typescript version', () => {
  it('should be 2.8.1', () => {
    expect(tscVersion).toBe('2.8.1');
  });
});
