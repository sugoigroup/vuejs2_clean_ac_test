import { injectable } from 'inversify';
import container from '@/di/patientInjector';
import UserRepositoyOutput from '@/mypackage/patient/repositories/InputOutput/UserRepositoryOutput';
import News from '@/mypackage/apis/provider/News'

@injectable()
export default class UserRepository {
  userRepositoyOutput;
  news;
  constructor(
  ) {
    this.userRepositoyOutput = container.get(UserRepositoyOutput);
    this.news = container.get(News);
  }

  async fetchUserById(toRepositoryInput) {
    const response = await this.news.apiGetDetailPost(toRepositoryInput.myDataObject.id);
    return this.userRepositoyOutput.output(response.data)
  }
}