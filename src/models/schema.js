import {Schema, model, models} from "mongoose";

const esquema = new Schema({
    "descripcion" : {required: true, type: String},
    "piso" : {required: true, type: String},
    "html" : {required: true, type: String},
    "mac_address" : {required: true, type: String}
});

export const modelo = models.carteleras || model('carteleras', esquema);