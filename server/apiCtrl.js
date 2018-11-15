module.exports ={
    async getScale(req,res){
        let {rootNote, scaleName} =req.body
        console.log(req.body)
        let db = req.app.get('db')
        // console.log(db)
        let scaleFound = await db.scales.get_scale([rootNote,scaleName])
        res.status(200).send(scaleFound)
    },
    // async getFret(req,res){

    // },
}