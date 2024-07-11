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

    const repositoryOutData = await this.userRepository.fetchUserById(input.toDataObject());

    console.log(repositoryOutData);
    return  this.fetchUserUseCaseOutput.toEntityObject(repositoryOutData.myDataObject);
  }
}