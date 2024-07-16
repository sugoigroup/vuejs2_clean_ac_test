// UseCaseInput 클래스 정의
import { injectable } from 'inversify';
import MyEntity1 from '../../entities/MyEntity1';
import User from '@/mypackage/patient/entities/User';

// UseCaseOutput 클래스 정의

@injectable()
export default class FetchUserUseCaseOutput {
    outputData;
    toEntityObject(respositoryData) {
        this.outputData = new MyEntity1(respositoryData.id, respositoryData.title, {'a': 'b'}, new User('iod', 'name'))
        return this;
    }
    
    get() {
        return this.outputData;
    }

}