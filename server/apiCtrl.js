module.exports ={
    async getScale(req,res){
        let {rootNote, scaleName} =req.body
        let db = req.app.get('db')
        // console.log(db)
        let scaleFound = await db.scales.get_scale([rootNote,scaleName])
        res.status(200).send(scaleFound)
    },
    async getFret(req,res){
        let {stringAndNotesArr} = req.body
        let [string,rootnote,second,third,fourth,fifth,sixth,seventh] = stringAndNotesArr
        let db = req.app.get('db')
        let fretFound = await db.scales.get_fret([string,rootnote,second,third,fourth,fifth,sixth,seventh])
        res.status(200).send(fretFound)
    },
}