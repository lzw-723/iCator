const { Sequelize, Op, Model, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database/data.sqlite'
});

async function test() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

const Cats = sequelize.define('Cat', {
    cid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        defaultValue: '凯特',
        allowNull: false
    },
    gender: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['公', '母', '未知']
    },
    status: {
        type: DataTypes.STRING,
        defaultValue: '未知'
    },
    color: {
        type: DataTypes.STRING,
        defaultValue: '未知'
    },
    remark: {
        type: DataTypes.TEXT,
        defaultValue: '无'
    }
}, {
    tableName: 'Cats'
});

function build(catModel) {
    delete catModel.cid;
    return Cats.build(catModel);
}

function save(cat) {
    cat.save();
}

async function sync() {
    Cats.sync();
}

function all() {
    return Cats.findAll();
}

function findOne(attributes) {
    return Cats.findOne({where: attributes});
}

exports.test = test
// exports.build = build
// exports.save = save
// exports.sync = sync
exports.cat = { build, save, sync, all, findOne }

// exports.Cats = Cats