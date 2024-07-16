import DataTypeOf from '@/mypackage/shared/jsValueTypeChecker/DataTypeOf';


export default class EntityAbs {
    validator(wantType, value) {
        const valueTypeOf = typeof value;

        switch(valueTypeOf) {
            case DataTypeOf.Object:
                if (wantType == DataTypeOf.Null) {
                    return value;
                }
                if (this.checkCustomDataTypeOf(wantType, value)) {
                    return value;
                }
                
                break;
            case DataTypeOf.String:
            case DataTypeOf.Number:
            case DataTypeOf.Boolean:
            case DataTypeOf.BinInt:

                if (valueTypeOf === wantType) {
                    return value;
                }
                break;
        }
        throw new Error(`Type mismatch: expected ${wantType}, got ${valueTypeOf}`);
    }

    // {..} is Object, not object. So It has to be lowercase.
    checkCustomDataTypeOf(wantType, compareObjectType) {
        return wantType.toLowerCase() == compareObjectType.constructor.name.toLowerCase();
    }
}