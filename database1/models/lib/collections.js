'use strict';

//CRUD operations
class Collection {
    constructor(model) {
        this.model = model;
    }

    async createRecord(obj) {
        try {
            // let newRecord = await this.model.create(obj);
            // return newRecord;
            //or
            return await this.model.create(obj);
        } catch(e) {
            console.error('error in creating a new record for model: ', this.model.name)
        }
    }
    async readRecord(id2) {
        try {
            if(id) {
                return await this.model.findOne({where: {id: id2}});
            } else {
                return await this.model.findAll();
            }
            
        } catch(e) {
            console.error('error in Reading record(s) for model: ', this.model.name)
        }
    }

}

module.exports = Collection