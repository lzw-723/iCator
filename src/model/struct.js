const struct = {
    code:200,
    msg:'Successfully responded.',
    data:{}
};

module.exports.putData = function (data) {
    // 返回一个成功状态的结构
    return this.newStruct(200, 'Successfully responded.', data);
}

module.exports.newStruct = function (code, msg, data) {
    struct.code = code;
    struct.msg = msg;
    struct.data = data;
    return struct;
}
