import studentSchema from "../models/studentSchema.js";
const homeController = async (req, res) => {
        res.render("index");
    }

    // Create
const createController = async (req, res) => {
    // console.log(req.body);
    const record = await studentSchema ({
        name: req.body.name,
        email: req.body.email,
        contact: req.body.contact,
        city_name: req.body.city_name
    });
    if(record) {
        await record.save();
        console.log('Data Saved')
    } else{
        console.log('Data Not Saved')  
    }
    res.render('index')
}

export {
    homeController , createController
};