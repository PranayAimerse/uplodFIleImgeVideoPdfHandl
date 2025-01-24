exports. errorResponse=(res,message,err)=>{
     return res.json({
        message:message,
        err:err
     })
}


exports. SuccessResponse=(res,message,data)=>{
    return res.json({
        message:message,
        data:data
    })
}