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
        // console.log(stringAndNotesArr)
        let [string,rootnote,second,third,fourth,fifth,sixth,seventh] = stringAndNotesArr
        let db = req.app.get('db')
        let fretFound = await db.scales.get_fret([string,rootnote,second,third,fourth,fifth,sixth,seventh])
        // console.log(fretFound)
        res.status(200).send(fretFound)
    },
    async getRootNote(req,res){
        let {stringAndNotesArr} = req.body
        console.log(stringAndNotesArr)
        let [string,rootnote] = stringAndNotesArr
        let db = req.app.get('db')
        let rootFound = await db.scales.get_rootnote([string,rootnote])
        console.log(rootFound)
        let {fret,fretrpt} = rootFound[0]
        res.status(200).send([fret,fretrpt])
    },
}