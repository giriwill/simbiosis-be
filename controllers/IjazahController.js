import { Sequelize } from "sequelize";
import Ijazah from "../models/IjazahModel.js";

const Op = Sequelize.Op;

export const getIjazah = async (req, res) => {
    try {
        const response = await Ijazah.findAll({
            where: {
                kelas: req.params.kelas,
            },
            order: [
                ['nama', 'asc'],
            ]
        })
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getIjazahForCombo = async (req, res) => {
    try {
        const response = await Ijazah.findAll({
            group: 'kelas'
        })
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const getIjazahForEdit = async (req, res) => {
    try {
        const response = await Ijazah.findOne({
            where: {
                id: req.body.id,
            },
        })
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const updateIjazah = async (req, res) => {
    try {
        const response = await Ijazah.update({
            nis: req.body.nis,
            nisn: req.body.nisn,
            nama: req.body.nama,
            ttl: req.body.ttl,
            ortu: req.body.ortu,
        }, {
            where: {
                id: req.params.id,
            }
        });
        res.status('201').json({ msg: "Data Produk berhasil di ubah" });
        // res.json(req.body.nama);
    } catch (error) {
        console.log(err.message);
    }
}

export const ubahStatusIjazah = async (req, res) => {
    try {
        const response = await Ijazah.findOne({
            where: {
                id: req.body.id,
            },
        })
        // res.json(response.selesai);
        if (response.selesai) {
            try {
                const response = await Ijazah.update({
                    selesai: "",
                }, {
                    where: {
                        id: req.body.id,
                    }
                });
                res.status('201').json({ msg: "Data status berhasil di ubah" });
                // res.json(req.body.nama);
            } catch (error) {
                console.log(err.message);
            }
        }else{
            try {
                const response = await Ijazah.update({
                    selesai: "true",
                }, {
                    where: {
                        id: req.body.id,
                    }
                });
                res.status('201').json({ msg: "Data status berhasil di ubah" });
                // res.json(req.body.nama);
            } catch (error) {
                console.log(err.message);
            }
        }
    } catch (error) {
        console.log(error.message);
    }
}

// get ijazah group by kelas
export const getIjazahByKelas = async (req, res) => {
    try {
        const response = await Ijazah.findAll({
            attributes: ['kelas',[Sequelize.fn('count', Sequelize.col('id')), 'count'],[Sequelize.fn('sum', Sequelize.col('selesai')), 'cekcount']],
            group:'kelas'
        })
        res.json(response);
    } catch (error) {
        console.log(error.message);
    }
}
