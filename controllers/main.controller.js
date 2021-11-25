const KhoaService = require('../services/khoa.service')

module.exports.cau1 = async (req, res) => {
    const list = await KhoaService.getAll()
    return res.render('cau1', { list })
}

module.exports.cau2 = (req, res) => {
    return res.render('cau2')
}

module.exports.cau2add = async ({ body }, res) => {
    const { SoCBGD, TenKhoa } = body
    const data = await KhoaService.add(TenKhoa, SoCBGD)
    return res.json({ code: 1, data, msg: 'Thêm thành công' })
}

module.exports.cau3 = (req, res) => {
    return res.render('cau3')
}

module.exports.cau3update = async ({ body }, res) => {
    const { _id, SoCBGD, TenKhoa } = body
    const khoa = await KhoaService.getOne('_id', _id)
    if (!khoa) {
        return res.redirect('/404')
    }
    const data = await KhoaService.update('_id', _id, { SoCBGD, TenKhoa })
    return res.json({ code: 1, data, msg: 'Sửa thành công' })
}

module.exports.cau4 = (req, res) => {
    return res.render('cau4')
}

module.exports.cau4delete = async ({ body }, res) => {
    const { _id } = body
    const khoa = await KhoaService.delete('_id', _id)
    if (!khoa) {
        return res.redirect('/404')
    }
    return res.json({ code: 1, data: khoa, msg: 'Xoá thành công' })
}

module.exports.cau5 = async ({ query }, res) => {
    let khoa = null

    if (query._id) {
        khoa = await KhoaService.getOne('_id', query._id)
    }
    return res.render('cau5', { khoa })
}
