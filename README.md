# Unified Campus Assistant
A campus assistant project providing basic information about the campus with 3 major platforms - an E-Wallet, a unique Market Hub with bidding and a chatbot for the campus.

## Presentation
[View presentation here](https://www.canva.com/design/DADoxyGQhrU/vOo_oWkdPeXtZ7yP8pyPAQ/view)

## View live App

Hosted at **https://campus-assistant.herokuapp.com/**

## A note to the viewers

1. You can try logging in as an **admin** by entering the following credentials:

* **username**: *admin*
* **password**: *pass123*

2. You can also register yourself as a student and then login to view the options available to a student or use the following credentials:

* **username**: *Yash*
* **password**: *Yash123*

3. When a user logs in and views the detail of a product, the number of views of that product increases by 1. In this way, the top 3 products with the maximum number of views are displayed on the home page.

## Need for Campus UN.A
Ever wondered where to pay those fines that admin forces on you for no reason? Ever wanted to book one plate Maggie before going to canteen so you don't have wait? Ever wondered to have a single platform where you can pay to admin and  shops simultaneously without making several rounds to different blocks and caring about cash in you pocket. We provide you the platform to make the four years of your college admin free and rusty cash free.

The fun doesn't stop here, you can bid on various items get exciting items at minimal cost or minimal items at extraordinary cost. It's all about your wise decision.

Don't worry about the interface, we provide you a bot that can chat. It can provide you any information about college and surrounding. Whether you want to check whether a canteen is open or not or the same query about admin office. The bot provides you all the answers. Even those which can take 3-5 years of experience to get the right answer. It can book your meals, pay your bills , can set as well as pay the payment reminders.
Everything you need in a college is right here in front of you.

## Some sample things which can ask our chatbot UNA currently-

Try something like

* where can i get maggi
* i want to make a bonafide certificate
* give me 3rd sem cse schedule
* phone number of ck sir

## User Permissions

### Student

A student can

* register himself on the app
* provide various details like facebook profile, email, phone number, room no. for contact
* view and edit his profile
* edit privacy settings (whether to include his contact number and room no. of hostel)
* change his password
* add money to his wallet (payment gateway not linked currently)
* search for various products and contact the concerned student for buying it
* upload details of a product to be sold online (to be verified by admin)
* turn on bidding for a product, he/she sells
* view bidding history of a product, he/she sells and turn bidding off, if he wants to fix the price.
* edit the products he has uploaded
* mark some of his products as *favorites*
* delete a product when it is sold
* bid some amount for a product he likes (But this is just to get listed in the owner's view and there is nothing like verification of account details, so it may also happen that a person can bid an amount that is less than the highest bid done. This is to ensure that all get a fair chance of bidding and no fake bids can rise issues.)
* edit his bid
* view bid history of a product he owns
* get answers of all basic queries related to campus, formal procedures for various scholarships, news related to fests, schedules of his branch, information regarding any professor he want, through our chatbot UNA

### Admin

An admin can

* view and edit his profile
* approve a product (if admin flags as appropriate then only,
all users will be able to see that product online. This is to ensure that no fake or obscene images are uploaded as well as no vulgar language is used )
* mark some of his products as *favorites*
* add data to IBM Watson Cloud for enhancing the information given by the chatbot

## Tech Stack Used

### The MERN Stack

* [MongoDB](https://docs.mongodb.com/) - Document database - to store data as JSON
* [Express.js](https://devdocs.io/express/) - Back-end web application framework running on top of Node.js
* [React](https://reactjs.org/docs/) - Front-end web app framework used
* [Node.js](https://nodejs.org/en/docs/) - JavaScript runtime environment

### Middleware

* [Redux](https://redux.js.org/basics/usage-with-react) - For flux architecture, and fetching rapidly data
* [Mongoose](https://mongoosejs.com/docs/guide.html) - ODM for MongoDB
* [AWS S3](https://console.aws.amazon.com/s3/) - Cloud server to store the images

### For Chatbot

* [IBM Watson](https://www.ibm.com/watson)
