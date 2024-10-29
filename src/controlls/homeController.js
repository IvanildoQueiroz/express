// const HomeModel = require('../models/HomeModels');

// HomeModel.create({
//     titulo:'Title of tests',
//     descricao: 'Description of tests',
// })

// HomeModel.find()

// .then(data=>console.log('>>>> ',data))
// .catch(e=>console.log('!!! ',e));

exports.initialPage = (req,res)=>{
    console.log(req.flash('info'),req.flash('succes'));
;

    res.render('index');
    return
};
exports.TrataPost = (req,res)=>{
    res.send(req.body);
    return
};