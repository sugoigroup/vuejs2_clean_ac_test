import 'reflect-metadata';
import UserRepository from '@/mypackage/patient/repositories/UserRepository';
import container from '@/di/patientInjector';


describe('UserRepository', () => {
  it('should return a user by id', async () => {
    const userRepository = container.get(UserRepository);
    const user = await userRepository.fetchUserById(1);
    expect(user.id).toBe(1);
    expect(user.name).toBe('John Doe2');
  });
});