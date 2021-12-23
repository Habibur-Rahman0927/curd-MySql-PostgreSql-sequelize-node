const connection = require('../db/db');


// create post
exports.post = (req,res)=>{
    const title = req.body.title;
    const desc = req.body.desc;

    let sql = 'INSERT INTO post SET ?';

    const query = connection.query(sql, {title, desc}, (err, result)=>{
        if(err){
            throw err;
        }
        
        res.json({post: result})
    })
}

// get all post
exports.getPost =(req,res)=>{
    let sql = "SELECT * FROM post";
    const query = connection.query(sql,(err, results) =>{
        if(err) throw err;
        res.json({post:results});
    })
}


// get single post 
exports.getSinglePost = (req, res)=>{
    let sql = `SELECT * FROM post WHERE id = ${req.params.id}`;
    const query = connection.query(sql, (err, result) => {
        if(err) throw err;
        res.json({post:result});
    })
}

// update post
exports.updatePost = (req, res)=>{
    // let sql = `UPDATE post SET title = '${req.body.title}' WHERE id = ${req.params.id}`; // single update
    let sql = `UPDATE post SET title='${req.body.title}',desc='${req.body.desc}' WHERE id ='${req.params.id}'`; // multipel update
    // let sql = `UPDATE post SET ? WHERE id ='${req.params.id}'`;
    const title = req.body.title;
    const desc = req.body.desc;
    const query = connection.query(sql,/* {title,desc} , */(err, result) => {
        if(err) throw err;
        res.json({post:result});
    })
}

// delete post
exports.deletePost = (req, res)=>{
    let sql = `DELETE FROM post WHERE id = ${req.params.id}`;
    const query = connection.query(sql,(err, result) => {
        if(err) throw err;
        res.json({post:result});
    })
}