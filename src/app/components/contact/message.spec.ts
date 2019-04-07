import { Message } from './message';

describe('Message', () => {
  it('should create an instance', () => {
    expect(new Message('test@example.com', 'test', 'test')).toBeTruthy();
  });
});
