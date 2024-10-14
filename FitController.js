const FitModel=require('./FitnessModel');


module.exports.getGoal=async(req,res)=> {
    const myGoal= await FitModel.find();
    res.send(myGoal)
}

module.exports.saveGoals = async (req,res) => {
    const { title } = req.body;
    FitModel.create({ title })
    .then((data)=> {
        console.log ('Goal added')
        res.send(data)
    })
}

module.exports.deleteGoal= async (req, res) => {
    const {_id} = req.body
    FitModel.findByIdAndDelete(_id)
    .then(()=> res.send ('Deleted goal'))
}

module.exports.editGoal = async (req, res) => {
    const { _id, title} = req.body;
    FitModel.findByIdAndUpdate( _id, {title})
    .then(()=> res.send('Edit a goal'))
}
