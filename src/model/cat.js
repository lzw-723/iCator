function newCat() {
    let cat = {
        cid: 1,
        name: '凯特',
        photo: 1,
        gender: 1,
        status: '活跃在30栋宿舍楼下',
        color: '灰色',
        remark: '性格温和，但不喜欢人接近'
    }
    return cat;
}
function newSimpleCat() {
    let cat = {
        cid: 1,
        name: '凯特',
        photo: 1
    }
    return cat;
}
function catList() {
    return;
}

module.exports.newCat = newCat;
module.exports.newSimpleCat = newSimpleCat;