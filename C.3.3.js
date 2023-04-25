function printObject (obj) {
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            console.log(prop, obj[prop]);
        }
    }
}

function checkPropInObj (str, obj) {
    return (str in obj);
}

function createObjWithoutProto() {
    return Object.create(null);
}