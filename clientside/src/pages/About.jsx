import React from 'react'
import MySql from "../img/MySql.svg";
import nodejs from "../img/Expressjs.svg";
import Reactjs from "../img/React.svg";
const About = () => {
  return (
    <div className='about'>
      <h1>Hi 🖐 Everyone :)</h1>
      <h2>MY Name is Vedant</h2>
      <h4 className='aboutme'>This is Website Designed by me Using <b>Reactjs</b> as a Frontend And <b> Nodejs</b> As a backend and for Databse I have used <b> MYSQL </b>.</h4>

      <div className="image">
      <img src={MySql} alt="" />
      <img className='img2' src={Reactjs} alt="" />
      <img src={nodejs} alt="" />
      </div>

      <div className="acontent">
        <p >
          In this website I have used Reactjs,Nodejs,Express and MySQL as Database.For now this website works on localhost system.
          So lets talk about what packages and library I have used in detail. </p>
          <br />
          <div className="cont1">
            <h2>1. Reactjs</h2>
            <br />
            <p>
            React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.</p>
            <p>
            React offers various extensions for entire application architectural support, such as Flux and React Native, beyond mere UI.</p>
          <br />
          <h3>In React I have used various packages that are mentioned below:</h3>
          <br />
          <div className="content">
            <div className="con1">
            <h3>1. React-router-dom</h3>
            <br />
            <p>
            React Router DOM is an npm package that enables you to implement dynamic routing in a web app. It allows you to display pages and allow users to navigate them. It is a fully-featured client and server-side routing library for React.
            </p>
            <p>React Router Dom is used to build single-page applications i.e. applications that have many pages or components but the page is never refreshed instead the content is dynamically fetched based on the URL. This process is called Routing and it is made possible with the help of React Router Dom.</p>
            </div>
            <div className="con2">
              <h3>2.Sass</h3>
              <br />
              <p>
              Stylesheets are getting larger, more complex, and harder to maintain. This is where a CSS pre-processor can help.

Sass lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff.</p>
    <p>Sass stands for Syntactically Awesome Stylesheet..
It is an extension to CSS.
Sass is a CSS pre-processor.
It is completely compatible with all versions of CSS
Sass reduces repetition of CSS and therefore saves time</p>
              </div>
            <div className="con3">
              <h3>3.Axios</h3>
              <br />
            <p>
            Axios, which is a popular library is mainly used to send asynchronous HTTP requests to REST endpoints. This library is very useful to perform CRUD operations.

This popular library is used to communicate with the backend. Axios supports the Promise API, native to JS ES6.
Using Axios we make API requests in our application.
</p><p> Once the request is made we get the data in Return, and then we use this data in our project. 
This library is very popular among developers. You can check on GitHub and you will find 78k stars on it. 
</p>
            
              </div>
            <div className="con4">
              <h3>4.Moment</h3>
              <br />
              <p>
              The moment-timezone package is required to use the timezone related functions.
use command
npm install moment in terminal
Then import the package into your project.
import 'moment';
              </p>
              <p>I have use this package to show the time to other when the user posted the blogs .</p>
         <p>And also use this fuction moment to store image by adding datetime+filename Which creates unique file name which reduce duplicate names</p>     
              </div>
            <div className="con5">
              <h3>5.Dompurify</h3>
              <br />
              <p>
              DOMPurify, an npm package created by more than 60 web security experts to sanitize HTML code and prevent XSS attacks, is the most popular package for sanitizing a markup in React.

DOMPurify is a DOM-only, lightning-fast, and incredibly forgiving XSS sanitizer for HTML, MathML, and SVG. <p>I have used thes to remove html tags which are showing on websites.</p> 

<p>DOMPurify can help us improve the security of our injected HTML code from dangerouslySetInnerHTML. This is how you will incorporate the DOMPurify package into your project.</p>
                
                </p>
                </div>
            
            </div>
          </div>
          <br /><br />
          
          
          

       
        
        <div className="cont2">
        <h2>2. Nodejs</h2>
        <br />
        <p>
          Node.js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.
          Node.js is intended to run on a dedicated HTTP server and to employ a single thread with one process at a time. </p>

          <p>Node.js applications are event-based and run asynchronously. Code built on the Node platform does not follow the traditional model of receive, process, send, wait, receive. Instead, Node processes incoming requests in a constant event stack and sends small requests one after the other without waiting for responses.</p>
        <br />
        <h3>In Nodejs I have used various packages that are mentioned below:</h3>
        <br />
        <div className="content">
        <div className="con1">
          <h3>1.Express</h3>
          <br />
          <p>Express was created to make APIs and web applications with ease,
It saves a lot of coding time almost by half and still makes web and 
mobile applications are efficient.
Another reason for using express is that it is written in javascript as javascript is an easy language even if you don't have a previous
knowledge of any language. Express lets so many new developers enter the field of web development.</p>
<p>The reason behind creating an express framework for node js is:

Time-efficient,
Fast ,
Economical,
Easy to learn and
Asynchronous</p>
          </div>
        <div className="con2">
          <h3>2.Mysql</h3>
          <br />
          <p>Node.js and MySQL are some of the necessary binding needed for any web application. MySQL is one of the most popular open-source databases in the world and efficient as well. Almost every popular programming language like Java and PHP provides drivers to access and perform operations with MySQL.</p>
          <p>In this project we use Node js and MySQL as backend.we create two tables in database one for users and another for posts then we connect Node js server with MySQL database.</p>
          </div>
        <div className="con3"><h3>3.Nodemon</h3>
        <br />
          <p>nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected.

nodemon does not require any additional changes to your code or method of development. nodemon is a replacement wrapper for node. To use nodemon, replace the word node on the command line when executing your script.</p>
<p>we can install nodemon by using command npm install -g nodemon it will install nodemon globaly</p>
        </div>
        <div className="con4"><h3>4.Bcryptjs</h3>
        <br />
        <p>Basicaly I have use this package to encript the password of user which they are creating at tht time of registering for the website.If i don't use this package the password will be store in the database as it is which is not a good practice</p>
        <p>When we use this libarry we hash the password into some alphanumeric value which is not readable.Which provide protection even if our database got hacked. If we have not hash the password the hacker may get the password easily</p>
        </div>
        <div className="con5"><h3>5.Jsonwebtoken</h3>
        <br />
        <p>JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
</p>
<p>
Although JWTs can be encrypted to also provide secrecy between parties, we will focus on signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties. When tokens are signed using public/private key pairs, the signature also certifies that only the party holding the private key is the one that signed it.</p>
        </div>
        <div className="con6"><h3>6.Multer</h3>
        <br />
        <p>Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. It is written on top of busboy for maximum efficiency.
</p>
<p>
NOTE: Multer will not process any form which is not multipart (multipart/form-data).</p>
<p>Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.</p>
        </div>
        <div className="con7"><h3>7.Cookie-parser</h3>
        <br />
        <p>Cookies are simple, small files/data that are sent to client with a server request and stored on the client side. Every time the user loads the website back, this cookie is sent with the request. This helps us keep track of the user’s actions.

The following are the numerous uses of the HTTP Cookies −

Session management
Personalization(Recommendation systems)
User tracking
To use cookies with Express, we need the cookie-parser middleware. To install it, use the following code −

npm install --save cookie-parser
Now to use cookies with Express, we will require the cookie-parser. cookie-parser is a middleware which parses cookies attached to the client request object. To use it, we will require it in our index.js file; this can be used the same way as we use other middleware. Here, we will use the following code.</p>
        </div>
        </div>
        </div>
       
        <br /><br />


        <div className="cont3">
        <h2>2. MYSQL</h2>
        <br />
        <p>MySQL is a relational database management system (RDBMS) developed by Oracle that is based on structured query language (SQL).
          MySQL is one of the most recognizable technologies in the modern big data ecosystem. Often called the most popular database and currently enjoying widespread, effective use regardless of industry, it’s clear that anyone involved with enterprise data or general IT should at least aim for a basic familiarity of MySQL.
          <br />
          With MySQL, even those new to relational systems can immediately build fast, powerful, and secure data storage systems. MySQL’s programmatic syntax and interfaces are also perfect gateways into the wide world of other popular query languages and structured data stores.
        </p>
        </div>

      </div>
      



      <h1>Thank You! For Comming 😊</h1>
    </div>
  )
}

export default About