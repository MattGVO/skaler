module.exports ={
    async getScale(req,res){
        let {rootNote, scaleName} =req.body
        let db = req.app.get('db')
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
    async getRootNote(req,res){
        let {stringAndNotesArr} = req.body
        let [string,rootnote] = stringAndNotesArr
        let db = req.app.get('db')
        let rootFound = await db.scales.get_rootnote([string,rootnote])
        let {fret,fretrpt} = rootFound[0]
        res.status(200).send([fret,fretrpt])
    },
    async getAllTunings(req,res) {
        let {user} =req.body
        let db = req.app.get('db')
        let foundTunings = await db.scales.get_all_tunings([user])
        res.status(200).send(foundTunings)
    },
    async getTuning(req,res){
        let { user,tuningName } = req.body
        let db = req.app.get('db')
        let [foundTuning] = await db.scales.get_tuning([user,tuningName])
        let { one,two,three,four,five,six,seven,eight } = foundTuning
        let tuning = [one,two,three,four,five,six,seven,eight]
        res.status(200).send(tuning)
    },
    async saveTuning(req,res){
        let { user,tuningName,tuning } = req.body
        let [ one,two,three,four,five,six,seven,eight ] = tuning
        let db = req.app.get('db')
        let [saveTuning] = await db.scales.save_tuning(
            [user,
             tuningName,
             one, two, three, four, five, six, seven, eight])
        res.sendStatus(200)
    },
    async deleteTuning(req,res){
        let { user,tuningName } = req.body
        let db = req.app.get('db')
        let [deleteTuning] = await db.scales.delete_tuning([user,tuningName])
        res.sendStatus(200)
    },
    async updateDbTuning(req,res){
        let { updateName,user,tuningName } = req.body
        let db = req.app.get('db')
        let [updateDbTuning] = await db.scales.update_db_tuning([updateName,user,tuningName])
        res.sendStatus(200)
    },
}