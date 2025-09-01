import mongoose from "mongoose";

const object = {
    connected : false
};

export async function connectDB()
{
    const mongo_uri = process.env.MONGO_URI;

    if (!mongo_uri) throw new Error("Error con URI DB.");
    if (object.connected) return;

    await mongoose.connect(mongo_uri); 
}

mongoose.connection.on('connected', () => {
    console.log('Mongo conectado.\n');
    object.connected = true;
});

mongoose.connection.on('error', () => {
    console.log("Error mongo.\n");
    object.connected = false;
});

mongoose.connection.on('disconnected', () => {
    console.log("Mongo desconectado.\n");
    object.connected = false;
})

mongoose.connection.on('reconnected', () => {
    console.log("Mongo reconectado.\n");
    object.connected = true;
})



