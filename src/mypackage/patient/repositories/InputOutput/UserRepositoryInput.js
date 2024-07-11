// UseCaseInput 클래스 정의
import { injectable } from 'inversify';

@injectable()
export default class UserRepositoryInput {
    myDataObject;
    input(myDataObject) {
        this.myDataObject = myDataObject;
        return this;
    }
}