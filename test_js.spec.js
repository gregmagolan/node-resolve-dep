const tsc = require('typescript');

describe('typescript version', () => {
  it('should be 2.8.1', () => {
    expect(tsc.version).toBe('2.8.1');
  });
});

const tscVersion = require('./javascript').tscVersion;

describe('typescript version from within require', () => {
  it('should be 2.8.1', () => {
    expect(tscVersion).toBe('2.8.1');
  });
});
