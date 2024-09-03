import { OBJECT } from './index';

const spy = jest.spyOn(OBJECT, 'sum');

describe('test', () => {
  it('should call the sum function', () => {
    const result = OBJECT.sum(1, 2);

    expect(spy).toHaveBeenCalled();
  });
});
