const hasOwnProperty = Object.prototype.hasOwnProperty;

export const merge = (target) => {
    for (let i = 1, j = arguments.length; i < j; i++) {
        let source = arguments[i] || {};
        for (let prop in source) {
            if (source.hasOwnProperty(prop)) {
                let value = source[prop];
                if (value !== undefined) {
                    target[prop] = value;
                }
            }
        }
    }

    return target;
};


export const hasOwn = (obj, key) => {
    return hasOwnProperty.call(obj, key);
};

export const toObject = (arr) => {
    let res = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            extend(res, arr[i]);
        }
    }
    return res;
};

function extend(to, _from) {
    for (let key in _from) {
        to[key] = _from[key];
    }
    return to;
}