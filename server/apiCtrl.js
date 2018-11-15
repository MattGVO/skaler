module.exports ={
    async getScale(req,res){
        let {rootNote, scaleName} =req.body
        let db = req.app.get('db')
        // console.log(db)
        let scaleFound = await db.get_scale([rootNote,scaleName])
        console.log(scaleFound)
    },
    // async getFret(req,res){

    // },
}