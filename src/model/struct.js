let struct = {
    code: 200,
    msg: 'Successfully responded.',
    data: {}
};

/**
 * 
 * @param {*} data
 * @returns struct
 * @description 调用newStruct函数，返回一个成功状态的struct
 */
function putData(data) {
    return this.newStruct(200, 'Successfully responded.', data);
}

/**
 * 
 * @param {number} code
 * @param {string} msg
 * @param {*} data
 * @returns struct
 */
function newStruct(code, msg, data) {
    let struct = { ...this.struct };
    struct.code = code;
    struct.msg = msg;
    struct.data = data;
    return struct;
}

module.exports.newStruct = newStruct;
module.exports.putData = putData;