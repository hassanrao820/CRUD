import studentSchema from "../models/studentSchema.js";
const editController = async(req, res) => {
    try{
        const record = await studentSchema.findById({'_id':req.params.id});
        if(record){
            res.render('edit', {
                'record':record
            });
        }
        else{
            res.render('edit', {
                message: "Record not found"
            });
        }
        res.render('edit');

    }catch(err){
        console.log(err.message);
    }
};
    
    //update controller
const updateController = async(req, res) => {
    try{
        const updatedRecord = await studentSchema.findByIdAndUpdate({'_id':req.params.id}, req.body);
        if(updatedRecord){
            res.redirect('/read');
        }
        else{
            res.render('edit', {
                message: "Record not found"
            });
        }
        res.render('edit');
    }catch(err){
        console.log(err.message);
    }
};

// delete controller
const deleteController = async(req, res) => {
    try{
        const deletedRecord = await studentSchema.findByIdAndDelete({'_id':req.params.id});
        if(deletedRecord){
            res.redirect('/read');
        }
        else{
            res.redirect('/');
        }
    }catch(err){
        console.log(err.message);
    }
};

export {
    editController , updateController , deleteController
};