import studentSchema from "../models/studentSchema.js";
const readController = async (req, res) => {
    try{
        const records = await studentSchema.find({})
        if(records){
            res.render('read', {'records': records})
        } else {
            res.render('read')
        }
        
    }catch(err){    
        console.log(err.msg);
    }
};

export{
    readController
}