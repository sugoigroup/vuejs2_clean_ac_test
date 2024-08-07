import { injectable } from 'inversify';
import container from '@/di/patientInjector';

import UserRepository from '@/mypackage/patient/repositories/UserRepository';
import FetchUserUseCaseOutput from '@/mypackage/patient/usecases/InputOutput/FetchUserUseCaseOutput';

@injectable()
export default class FetchUserUseCase {
  constructor(
  ) {
    this.userRepository = container.get(UserRepository);
    this.fetchUserUseCaseOutput = container.get(FetchUserUseCaseOutput);
  }

  async execute(input) {
    await delay(5000);
    console.log("fetch1");
    const repositoryOutData = await this.userRepository.fetchUserById(input.toRepositoryInput());
    return  this.fetchUserUseCaseOutput.toEntityObject(repositoryOutData.myDataObject);
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}