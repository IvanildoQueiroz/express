exports.initialPage = (req,res)=>{
    res.render('index');
};
exports.TrataPost = (req,res)=>{
    res.send(req.body);
};