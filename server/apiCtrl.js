module.exports ={
    async getScale(req,res){
        let {rootNote, scaleName} =req.body
        console.log('rootNote:', rootNote)
        console.log('scaleName:', scaleName)
    },
    // async getFret(req,res){

    // },
}