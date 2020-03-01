import { average } from './functions';

describe('Average function', () => {
    it('should calc average', () => {
        expect(average('6', 8)).toEqual('Average is 7');
        expect(average(6, '8')).toEqual('Average is 7');
    })
});
