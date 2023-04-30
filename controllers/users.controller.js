const { request, response } = require('express')


const getUsers = (req = request, resp = response) => {

    const { id } = req.query;

    resp.json({
        msg: 'Get',
        id
    });

}

const putUsers = (req, resp = response) => {

    const {id} = req.params;

    resp.json({
        msg: 'Put',
        id
    });
}

const postUsers = (req, resp = response) => {

    const { name, age } = req.body;



    resp.json({
        msg: 'Post',
        name,
        age
    });
}

const deleteUsers = (req, resp = response) => {
    resp.json({
        msg: 'Delete'
    });
}

module.exports = {
    getUsers,
    deleteUsers,
    postUsers,
    putUsers
}