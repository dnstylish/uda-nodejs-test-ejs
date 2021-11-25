const Khoa = require('../models/Khoa')

module.exports = class {
    /**
     * @param field { String }
     * @param value { String | Number }
     * @returns {Promise<Query<any, any, {}, any>>}
     */
    static async getOne(field, value) {
        return Khoa.findOne({ [field]: value })
    }

    static async getAll() {
        return Khoa.find()
    }

    /**
     * @param TenKhoa { String }
     * @param SoCBGD { Number }
     * @returns {Promise<EnforceDocument<any, {}, {}>>}
     */
    static async add(TenKhoa, SoCBGD) {
        return Khoa.create({ TenKhoa, SoCBGD })
    }

    /**
     * @param field { String }
     * @param value { String | Number }
     * @param update { Object: { SoCBGD: Number, TenKhoa: String } }
     * @returns {Promise<Query<any, any, {}, any>>}
     */
    static async update(field, value, update) {
        return Khoa.findOneAndUpdate({ [field]: value }, update, { returnOriginal: false })
    }

    /**
     * @param field { String }
     * @param value { String | Number }
     * @returns {Promise<Query<any, any, {}, any>>}
     */
    static async delete(field, value) {
        return Khoa.findOneAndDelete({ [field]: value })
    }
}
