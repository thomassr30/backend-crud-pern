const pool = require('../db')
const {} = require('../db')

const getAllTasks = async (req, res) => {
    try {
        const allTaskts = await pool.query('SELECT * FROM task')
        return res.json(allTaskts.rows)
    } catch (error) {
        return res.json({error: error.message})
    }
}

const getTask = async (req, res) => {
    const {id} = req.params
    try {
        const task = await pool.query('SELECT * FROM task where id = $1',[id])
        if(task.rows.length === 0){
            return res.status(404).json({msg: 'Tarea no encontrada'})
            
        }
        return res.json(task.rows)
    } catch (error) {
        return res.json({error: error.message})
    }
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
    const {id} = req.params
    try {
        const task = await pool.query(
            'DELETE FROM task where id = $1'
            ,[id])
        if(task.rowCount === 0){
            return res.status(404).json({msg: 'Tarea no encontrada'})    
        }
        return res.sendStatus(204)
    } catch (error) {
        return res.json({error: error.message})
    }
}





module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}
