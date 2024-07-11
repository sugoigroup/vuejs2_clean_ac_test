import 'reflect-metadata';
import container from '@/di/patientInjector';

import User from '@/mypackage/patient/entities/User';
import UserRepository from '@/mypackage/patient/repositories/UserRepository';

import FetchUserUseCase from '@/mypackage/patient/usecases/FetchUserUseCase';


describe('FetchUserUseCase', () => {
    it('should return a user by id', async () => {
        // Mocking the fetchUserById method
        const userRepository = container.get(UserRepository);
        jest.spyOn(userRepository, 'fetchUserById').mockResolvedValue({ id: 1, name: 'John Doe2' });

        const fetchUserUseCase = container.get(FetchUserUseCase);
        const user = await fetchUserUseCase.execute(1);

        expect(user).toBeInstanceOf(User);
        expect(user.id).toBe(1);
        expect(user.name).toBe('John Doe2');
    });
  });