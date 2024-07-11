import { injectable } from 'inversify';
import container from '@/di/patientInjector';
import MyResultDataObject from '@/mypackage/patient/repositories/dataObjects/MyResultDataObject';
import UserRepositoyOutput from '@/mypackage/patient/repositories/InputOutput/UserRepositoryOutput';

@injectable()
export default class UserRepository {
  userRepositoyOutput;
  constructor(
  ) {
    this.userRepositoyOutput = container.get(UserRepositoyOutput);
  }

  fetchUserById(id) {
    console.log(id);
    // 실제 API 호출 또는 데이터베이스 쿼리를 모방합니다.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.userRepositoyOutput.output(new MyResultDataObject(11, 'John Doe2' )));
      }, 1000);
    });
  }
}