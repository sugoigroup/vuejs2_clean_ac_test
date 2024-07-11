// UseCaseInput 클래스 정의
import { injectable } from 'inversify';
import container from '@/di/patientInjector';

import UserRepositoryInput from '../../repositories/InputOutput/UserRepositoryInput';
import MyDataObject from '../../repositories/dataObjects/MyDataObject';

@injectable()
export default class FetchUserUseCaseInput {
    constructor(
    ) {
        this.userRepositoryInput = container.get(UserRepositoryInput);
    }

    userEntity;
    input(userEntity) {
        this.userEntity = userEntity;
        return this;
    }

    toDataObject() {
        return this.userRepositoryInput.input(
            new MyDataObject(this.userEntity.id, this.userEntity)
        )
    }
}