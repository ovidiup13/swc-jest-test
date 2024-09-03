import { OBJECT } from './index';
import * as m from './index';

const spy = jest.spyOn(OBJECT, 'sum');
const wildcardSpy = jest.spyOn(m, 'sum');

describe('test', () => {
  it('should call the sum function', () => {
    const result = OBJECT.sum(1, 2);

    expect(spy).toHaveBeenCalled();
    expect(wildcardSpy).toHaveBeenCalled();
  });
});
