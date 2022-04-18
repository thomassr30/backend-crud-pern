
const getAllTasks = async (req, res) => {
    res.send('Obteniendo')
}

const getTask = async (req, res) => {
    res.send('Obteniendo 1 tarea')
}

const createTask = async (req, res) => {
    res.send('Obteniendo 1 tarea')
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
