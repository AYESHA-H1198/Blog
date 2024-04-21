import react from '../Assets/react.png';
import node from '../Assets/node.jpg';
import mongodb from '../Assets/mongodb.jpg';
const articles = [
    {
        name: 'learn-react',
        title: 'The Fastest Way to Learn React',
        content: [
            `Welcome to "The Fastest Way to Learn React"! React is a JavaScript library developed by Facebook for building user interfaces. It's become one of the most popular choices for front-end development due to its simplicity, flexibility, and performance.`,
            `In this article, we'll start by understanding the core concepts of React, such as components, props, state, and JSX (JavaScript XML). We'll learn how to create reusable components to build complex UIs efficiently.`,
            `Next, we'll explore more advanced topics like React Hooks, which allow us to use state and other React features without writing a class. We'll also delve into React Router for handling navigation in single-page applications.`,
            `Throughout this guide, we'll provide hands-on examples and best practices to accelerate your learning process. By the end, you'll have the skills and confidence to tackle React projects of any size.`,
        ],
        backgroundImage: react
    },    
    {
        name: 'learn-node',
        title: 'How to Build a Node Server in 10 Minutes',
        content: [
            `Welcome to "How to Build a Node Server in 10 Minutes"! Node.js is a powerful JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to run JavaScript code on the server-side, enabling the development of scalable and high-performance applications.`,
            `In this tutorial, we'll guide you through setting up a basic Node.js server using Express.js, a fast and minimalist web framework for Node.js. We'll cover installing Node.js, initializing a new project, and installing Express.`,
            `You'll learn how to create routes to handle HTTP requests, serve static files, and perform common server-side tasks. By the end of this tutorial, you'll have a functioning Node.js server up and running, ready to serve your applications.`,
        ],
        backgroundImage: node
    },    
    {
        name: 'mongodb',
        title: 'Learn MongoDB',
        content: [
            `Welcome to "Learn MongoDB"! MongoDB is a popular NoSQL database that provides a flexible and scalable solution for storing and managing data. Unlike traditional relational databases, MongoDB stores data in JSON-like documents with dynamic schemas, making it ideal for modern applications.`,
            `In this comprehensive guide, we'll cover everything you need to know about MongoDB. We'll start by installing MongoDB and exploring its basic features, including creating databases, collections, and documents.`,
            `You'll learn how to perform CRUD operations (Create, Read, Update, Delete) using MongoDB's powerful query language and operators. We'll also delve into advanced topics such as indexing, aggregation, and transactions.`,
            `Whether you're a beginner or an experienced developer, this guide will equip you with the knowledge and skills to leverage MongoDB effectively in your projects.`,
        ],
        backgroundImage: mongodb
    },  
];

export default articles;
