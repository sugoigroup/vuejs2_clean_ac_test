import MyEntity1 from '@/mypackage/patient/entities/MyEntity1';
import User from '@/mypackage/patient/entities/User';


describe('MyEntity1', () => {
    it('should create an instance with valid values', () => {
        const entity = new MyEntity1(1, 'John Doe', { email: 'john.doe@example.com' }
            , new User("2","name")
        );
        expect(entity.id).toBe(1);
        expect(entity.name).toBe('John Doe');
        expect(entity.email).toEqual({ email: 'john.doe@example.com' });
    });
});