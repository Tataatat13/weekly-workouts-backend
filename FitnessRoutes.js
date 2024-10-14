const {Router}=require("express");
const { getGoal, saveGoals, deleteGoal, editGoal} =require('./FitController');

const router = Router();

router.get('/', getGoal);
router.post('/saveGoals', saveGoals);
router.post('/deleteGoal', deleteGoal);
router.post('/editGoal', editGoal)




module.exports=router;