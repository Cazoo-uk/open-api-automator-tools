import { request } from './validation';

describe('Validation', () => {
    it('should be valid', () => {
        expect(() => request({
            age: 20,
            firstName: 'Vittorio',
            lastName: 'Guerriero',
        })).not.toThrow()
    });

    it('should be invalid', () => {
        expect(() => request({
            age: -10,
            firstName: 'Vittorio',
            lastName: 'Guerriero',
        })).toThrow()
    });
});
