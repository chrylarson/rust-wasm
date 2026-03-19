import { isPaused, play, pause, getIndex } from './index.js';

// The module calls play() on load, so animation starts immediately.
// Reset to a known state before each test.
beforeEach(() => {
  pause();
  jest.clearAllMocks();
});

describe('getIndex', () => {
  it('returns 0 for (0, 0)', () => {
    expect(getIndex(0, 0)).toBe(0);
  });

  it('returns column index for first row', () => {
    expect(getIndex(0, 5)).toBe(5);
  });

  it('offsets by width (64) for each row', () => {
    expect(getIndex(1, 0)).toBe(64);
    expect(getIndex(2, 0)).toBe(128);
  });

  it('combines row offset and column', () => {
    expect(getIndex(3, 7)).toBe(3 * 64 + 7);
  });
});

describe('isPaused', () => {
  it('returns true when paused', () => {
    pause();
    expect(isPaused()).toBe(true);
  });

  it('returns false when playing', () => {
    play();
    expect(isPaused()).toBe(false);
  });
});

describe('play', () => {
  it('sets isPaused to false', () => {
    play();
    expect(isPaused()).toBe(false);
  });

  it('updates button label to ⏸', () => {
    play();
    expect(document.getElementById('play-pause').textContent).toBe('⏸');
  });

  it('calls requestAnimationFrame', () => {
    play();
    expect(requestAnimationFrame).toHaveBeenCalled();
  });
});

describe('pause', () => {
  beforeEach(() => play());

  it('sets isPaused to true', () => {
    pause();
    expect(isPaused()).toBe(true);
  });

  it('updates button label to ▶', () => {
    pause();
    expect(document.getElementById('play-pause').textContent).toBe('▶');
  });

  it('calls cancelAnimationFrame', () => {
    pause();
    expect(cancelAnimationFrame).toHaveBeenCalled();
  });
});

describe('play/pause button click', () => {
  it('toggles from paused to playing', () => {
    pause();
    document.getElementById('play-pause').click();
    expect(isPaused()).toBe(false);
  });

  it('toggles from playing to paused', () => {
    play();
    document.getElementById('play-pause').click();
    expect(isPaused()).toBe(true);
  });
});
