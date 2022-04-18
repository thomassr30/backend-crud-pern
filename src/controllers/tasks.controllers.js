const pool = require('../db')
const {} = require('../db')

const getAllTasks = async (req, res) => {
    try {
        const allTaskts = await pool.query('SELECT * FROM task')
        res.json(allTaskts.rows)
    } catch (error) {
        return res.json({error: error.message})
    }
}

const getTask = async (req, res) => {
    res.send('Obteniendo 1 tarea')
}

const createTask = async (req, res) => {
    const {title, description} = req.body
    try {
        const result  = await pool.query(
            'INSERT INTO task (title, description) VALUES ($1, $2) RETURNING *',
            [title, description]
            )
        res.json(result.rows[0])
    } catch (error) {
        return res.json({error: error.message})
    }
}

const updateTask = async (req, res) => {
    res.send('actualizando 1 tarea')
}

const deleteTask = async (req, res) => {
    res.send('eliminando 1 tarea')
}





module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}
