const express = require('express');
const cors = require('cors');
const connection = require('./db/db');
const router = require('./routes/routes');
const sequelize = require('./config/sqDB')
const app = express();
const PORT = 5500;

connection.connect((err)=>{
    if(err){
        console.log(err);
    }
    console.log("DataBase is connect...");
});

app.use(express.json());
app.use(cors());


app.get('/', (req,res) => {
    res.json({
        "api":"api is runing", 
    })
})

app.use('/api/v1', router)

sequelize
    // .sync({force: true})
    .sync()
    .then(resut => {
        app.listen(PORT, () => console.log(`server is runing on port ${PORT}`));
    })
    .catch(err => {
        console.log(err)
    })

