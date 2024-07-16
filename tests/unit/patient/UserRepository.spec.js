import 'reflect-metadata';
import container from '@/di/patientInjector';
import UserRepository from '@/mypackage/patient/repositories/UserRepository';
import FetchUserUseCaseInput from '@/mypackage/patient/usecases/InputOutput/FetchUserUseCaseInput';
import MyEntity1 from '@/mypackage/patient/entities/MyEntity1';
import User from '@/mypackage/patient/entities/User';



describe('UserRepository', () => {

  let userRepository;
  let fetchUserUseCaseInput;

  beforeAll(() => {
    userRepository = container.get(UserRepository);
    fetchUserUseCaseInput = container.get(FetchUserUseCaseInput);
  });

  it('should return a user by id', async () => {
    // Arrange
    const myEntity = new MyEntity1(1, 'myName', { aa: 'a' }, new User('id', 'name'));
    fetchUserUseCaseInput.input(myEntity);

    // Act
    const userRepositoryOutput = await userRepository.fetchUserById(fetchUserUseCaseInput.toRepositoryInput());

    expect(userRepositoryOutput.myDataObject.id).toBe(1);
    expect(userRepositoryOutput.myDataObject.name).toBe('myName');
  });
});