//console.log('NodeJs First Server')
//java script run line by linne
// var names="ayesha"
// console.log(names)
// names="fatima"
// console.log(names)
//let mein value redeclare nhi hota var mein hoti hai
// 

// //template literals
// let firstName='AYSHA'
// let lastName='FAYYAZ'
// console.log(`my name is ${firstName}`)
// const express = require('express')
// import express from 'express'
// const app = express()

// // respond with "hello world" when a GET request is made to the homepage
// app.get('/', (req, res) => {
//   res.send('hello ')
// })
// app.get('/dessert', (req, res) => {
//   res.send('dessert ')
// })
// app.get('/sand', (req, res) => {
//   res.send('hello sand ')
// })
// app.listen(8000,() =>{
//   console.log('hello server is listening at http://localhost:8000')
// })

// import express from 'express'
// const app = express();
// //four kind of requests get,put,post,delete
// app.get('/hello' , (req,res)=> {
//   res.send('hello')
// })
// app.post('/hello' , (req,res)=> {
//   res.send('hello')
// })
// app.listen(8000,() =>{
//   console.log('listening at http://localhost:8000')
// })

//New session
// import express from 'express'
// const app =express();
// app.use(express.json())
// app.get('/' , (req,res)=> {
//       res.send('hello')
//     })
// app.post('/hello', (req,res )=> {
//     console.log(req.body)

//     res.send(`Hello ${req.body.name}`)
// })
// app.get('/hello/:name/goodbye/:othername',(res,req) =>{
//     const{name}=req.params;
//     console.log(req.params)
//     res.send(`hello ${name}`)
// })


// app.listen(8000,() =>{
//       console.log('listening at http://localhost:8000')
//     })

// import express from 'express'
// let articlesInfo =[{
//     name:'learn-react',
//     upvote:0,
// },
// {
//     name:'learn-node',
//     upvote:0,
// },
// {
//     name:'mongodb',
//     upvote:0,
// },
// ]
// const app=express();
// app.use(express.json());

// app.put('/api/article/:name/upvote',(req,res) => {
//     const{name} =req.params;
//     const article =articleInfo.find(a => a.name===name);
// if(article){
//     article.upvotes +=1;
//     ra.send(`the ${name} article now has ${article.upvotes} upvotes`);
// }
// else{
//     ra.send(`that article doesn't exist`);
// }
// });
// app.listen(8000,() =>{
//           console.log('listening at http://localhost:8000')
//         })


// import express from 'express'
// const app = express();
// //four kind of requests get,put,post,delete
// app.get('/hello' , (req,res)=> {
//   res.send('hello')
// })
// app.post('/hello' , (req,res)=> {
//   res.send('hello')
// })
// app.listen(8000,() =>{
//   console.log('listening at http://localhost:8000')
// })

//New session
// import express from 'express'
// const app =express();
// app.use(express.json())
// app.get('/' , (req,res)=> {
//       res.send('hello')
//     })
// app.post('/hello', (req,res )=> {
//     console.log(req.body)

//     res.send(`Hello ${req.body.name}`)
// })
// app.get('/hello/:name/goodbye/:othername',(res,req) =>{
//     const{name}=req.params;
//     console.log(req.params)
//     res.send(`hello ${name}`)
// })


// app.listen(8000,() =>{
//       console.log('listening at http://localhost:8000')
//     })

// import express from 'express'
// let articlesInfo =[{
//     name:'learn-react',
//     upvote:0,
//     comments:[],
// },
// {
//     name:'learn-node',
//     upvote:0,
//     comments:[],
// },
// {
//     name:'mongodb',
//     upvote:0,
//     comments:[],
// },
// ]
// const app=express();
// app.use(express.json());

// app.put('/api/article/:name/upvote',(req,res) => {
//     const{name} =req.params;
//     const article =articleInfo.find(a => a.name===name);
// if(article){
//     article.upvotes +=1;
//     ra.send(`the ${name} article now has ${article.upvotes} upvotes`);
// }
// else{
//     ra.send(`that article doesn't exist`);
// }
// });
// app.post('/api/article/:name/comments',(req,res) => {
//     const{name} =req.params;
//     const{postedBy,text}=req.body;
//     const article =articleInfo.find(a => a.name===name);
// if(article){
//     article.comments.push ({postedBy,text});
//     ra.send(article.comments);
// }
// else{
//     ra.send(`that article doesn't exist`);
// }
// });
// app.listen(8000,() =>{
//           console.log('listening at http://localhost:8000')
//         })


// import express from 'express';
// import {db, connectToDb} from './db.js';
// const app = express();
// app.use(express.json());
// app.get('/api/articles/:name',async (req,res) => {
//     const {name}=req.params;
//     const article = await db.collection('articles').findOne({name});
//     if (article){
//         res.json(article);
//     }
//     else{
//         res.sendStatus(404);
//     }
// });
// app.put('/api/articles/:name/upvote', async (req,res)=>{
//     const {name} = req.params;
//     await db.collection('articles').updateOne({name},{
//         $inc: {upvotes:1},
//     });
//     const article = await db.collection('articles').findOne({name});
//     if (article){
//         res.send(`The ${name} article now has ${article.upvotes} upvotes!!!!`);
//     }
//     else{
//         res.send('The article doesn\'t exist');
//     }

   
// });
// connectToDb(()=> {
//     console.log('Successfully connected to database!');
//     app.listen(8000,()=>{
//         console.log('server is listening on port 8000');
//     });
// })

import express from 'express';
import { db, connectToDb } from './db.js';

const app = express();
app.use(express.json());

app.get('/api/articles/:name', async (req, res) => {
    const { name } = req.params;

    const article = await db.collection('articles').findOne({ name });

    if (article) {
        res.json(article);
    } else {
        res.sendStatus(404);
    }
});

app.put('/api/articles/:name/upvote', async (req, res) => {
    const { name } = req.params;
   
    await db.collection('articles').updateOne({ name }, {
        $inc: { upvotes: 1 },
    });
    const article = await db.collection('articles').findOne({ name });

    if (article) {
        res.send(`The ${name} article now has ${article.upvotes} upvotes!!!`);
    } else {
        res.send('That article doesn\'t exist');
    }
});

app.post('/api/articles/:name/comments', async (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;

    await db.collection('articles').updateOne({ name }, {
        $push: { comments: { postedBy, text } },
    });
    const article = await db.collection('articles').findOne({ name });

    if (article) {
        res.send(article.comments);
    } else {
        res.send('That article doesn\'t exist!');
    }
});

connectToDb(() => {
    console.log('Successfully connected to database!');
    app.listen(8000, () => {
        console.log('Server is listening on port 8000');
    });
})