import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Ijazah = db.define('ijazah', {
    kelas: DataTypes.STRING,
    nama: DataTypes.STRING,
    ttl: DataTypes.STRING,
    ortu: DataTypes.STRING,
    nis: DataTypes.STRING,
    nisn: DataTypes.STRING,
    selesai: {
        type : DataTypes.BOOLEAN,
        allowNull : true,
    },
}, { freezeTableName: true });

export default Ijazah;

(async () => {
    await db.sync();
})();