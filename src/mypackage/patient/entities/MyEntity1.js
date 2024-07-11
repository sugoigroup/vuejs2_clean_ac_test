
import EntityAbs from '@/mypackage/entity/EntityAbs';

export default class MyEntity1 extends EntityAbs {
    id;
    name;
    email;
    user;

    constructor(id, name, email, user) {
        super();
        this.id = this.validator("number", id);
        this.name = this.validator("string", name);
        this.email = this.validator("object", email);
        this.user = this.validator("User", user);
    }
}
