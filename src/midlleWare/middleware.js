exports.MiddlewareGlobal = (req,res,next)=>{

    if(req.body.name == "ivanildo"){
        req.body.name = req.body.name.replace('ivanildo','Not READ YOUR NAME')
    }
    
    console.log(`Global...: ${req.body.name}`);
    next();
}