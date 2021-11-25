const { check } = require('express-validator')

module.exports.cau2 = () => {
    return [
        check('TenKhoa', 'Tên Khoa không được để trống').not().isEmpty(),
        check('SoCBGD', 'SoCBGD ko dc để trống').not().isEmpty()
    ]
}

module.exports.cau3 = () => {
    return [
        check('_id', 'Mã Khoa không được để trống').not().isEmpty(),
        check('TenKhoa', 'Tên Khoa không được để trống').not().isEmpty(),
        check('SoCBGD', 'SoCBGD ko dc để trống').not().isEmpty()
    ]
}

module.exports.cau4 = () => {
    return [check('_id', 'Mã Khoa không được để trống').not().isEmpty()]
}
