import 'reflect-metadata';
import container from '@/di/patientInjector';

import User from '@/mypackage/patient/entities/User';
import UserRepository from '@/mypackage/patient/repositories/UserRepository';

import FetchUserUseCase from '@/mypackage/patient/usecases/FetchUserUseCase';
import FetchUserUseCaseInput from '@/mypackage/patient/usecases/InputOutput/FetchUserUseCaseInput';
import FetchUserUseCaseOutput from '@/mypackage/patient/usecases/InputOutput/FetchUserUseCaseOutput';
import MyEntity1 from '@/mypackage/patient/entities/MyEntity1';


describe('FetchUserUseCase', () => {
    it('should return a user by id', async () => {
        // Mocking the fetchUserById method
        const userRepository = container.get(UserRepository);
        jest.spyOn(userRepository, 'fetchUserById').mockResolvedValue({ id: 1, name: 'John Doe2' });

        const fetchUserUseCase = container.get(FetchUserUseCase);
        const fetchUserUseCaseInput = container.get(FetchUserUseCaseInput);

        const myinput = fetchUserUseCaseInput.input(
            new MyEntity1 (
                1,
                'myName',
                {'aa':'a'},
                new User('id', 'name')
            )
        );

        const user = await fetchUserUseCase.execute(myinput);

        expect(user).toBeInstanceOf(FetchUserUseCaseOutput);
        expect(user.get().id).toBe(1);
        expect(user.get().name).toBe('myName');
    });
  });