// UseCaseInput 클래스 정의
import { injectable } from 'inversify';

@injectable()
export default class UserRepositoryOutput {
    myDataObject;
    output(myDataObject) {
        this.myDataObject = myDataObject;
        return this;
    }
}