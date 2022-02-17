## Quidax Book App

### About Project
This project is a simple ecommerce book application use for purchase of book items. The application is built with React JS. 

## Application Features
-A Home view with the display of various book items.
- A cart page for the display of book items added to Cart
- A Hero slider section for the display of featured books.
- Add to  cart functionality - adding of book to cart
- Disabling a book product button if book is not in stock.

## Application Functionalities
- When an item is added to the cart by the clicking of the "Add to cart" button, the cart page displays on the sidebar showing the list of book items that have been added.

- The subtotal of the amount for the books is also displayed

- A minus and plus buttons are also implemented on the cart page. This is to add more or remove items from the cart.

- With the click of a single book item, one is redirected to the book page where you can find details about the book.

- You can also add the book to your cart using the button on the book page.





#### The application is also fully deploy and hosted on Netlify. Live view of the application Demo can be found here- [Quidax Book App](https://quidax-book-app.netlify.app/)

### Pictorial View of the Application

Home page display of book items


![home-page](https://user-images.githubusercontent.com/26815113/148362691-2788f7f1-3a37-4a4d-b8b3-c15b93a16247.JPG)



Books display on Banner section:

![banner-books](https://user-images.githubusercontent.com/26815113/148362405-fc2e13f2-36dd-4374-b3a7-d238617735fc.JPG)



Single Book Display
![single-book](https://user-images.githubusercontent.com/26815113/148363158-b1d6eda5-dd85-4cd5-be69-d0b8423a2d7e.JPG)



Display of Items added to cart

The minus and  plus buttons can be used to decrease  and increase items added to cart.

Use the remove button to remove an item from cart.

The amount for the sum total of the book item is calculated and and displayed at the subtotal 

![cart-items-display](https://user-images.githubusercontent.com/26815113/146402997-61cf1336-00d0-4ed9-b22e-a292f3e92af6.JPG)





## How to use the application

## Table of Contents
- [Getting Started](#getting-started)
	- [Tools Required](#tools-required)
	- [Installation](#installation)
- [Development](#development)
- [Running the App](#running-the-app)
- [Deployment](#deployment)
- [Authors](#authors)
- [License](#license)

## Getting Started

#### Dependencies
The project is built with;
* [React JS](https://beta.reactjs.org/) -Library for building user interfaces
* [GraphQL](https://graphql.org/learn/) - Open-source data query and manipulation language for APIs
* [Apollo Client](https://www.apollographql.com/docs/react/) - Production-ready, caching GraphQL client
* [CSS]()

It uses [Node.js >= 12.18.3](https://nodejs.org/en/) 



 ## Project Folder structure.

```
	quidaax-book-app
	├── README.md
	├── package.json
	├── .gitignore
	├── public
	│   ├── favicon.ico
	│   ├── index.html
	│   └── manifest.json
	└── src
	      └── components
		     ├── Backdrop
			      ├── Backdrop.js
				  ├── backdrop.css
			 ├── Card
			       ├── Card.js
                    ├── card.css
			 ├── CategoryDisplay
			       ├── CategoryDisplay.js
				   ├── categoryDisplay.css
			 ├── Hero
			       ├── MainHero.js.js
				   ├── mainhero.css
			 ├── Navbar
			       ├── Navbar.js
				   ├── navbar.js
             ├── CartItem
			       ├── CartItem.js
				   ├--cartItem.css
             ├── Search
			       ├── SearchBox.js
				    ── SearchBox.css
				   ├---SearcResult.js
				    

			 ├── Rating.js
	       └── contexts
	              └── CartContext.js
		                
		    ├── graphQL
		        └── queries.js

			├── Pages
			     ├── Book
				      ├── BookPage.js
					  ├── bookPage.css
			     ├── CartPage
				      ├── CartPage.js
					  ├── cartpage.css

				 ├── Home
				      ├── Home.js
					  
		   └── App.js
		  └── App.css
		  └── index.css
		  └── index.js

```
### Prerequisites
Ensure you have NodeJS installed by entering node -v on your terminal If you don't have NodeJS installed, go to the NodeJS Website, and follow the download instructions


### Tools Required
The following tools are required to run this application:

* A text editor like Visual Studio Code
* Command Line

### Getting the source code
You can clone the repository directly using this command:
git clone git@github.com:jamesoyanna/QuidaxBook-App.git

### Installation
Installation steps:

Node.js and Yarn or Npm
Your computer must have installed nodejs, and yarn to run this application You can download Node.js from https://nodejs.org and yarn from https://yarnpkg.com/lang/en/docs/install/ . NPM comes bundled with Node.js

![nodejs](https://user-images.githubusercontent.com/26815113/132867561-bf2ec1a2-cd63-461f-95dd-e95c1c6676c7.PNG)

## Install Npm Packages
After clonning the application, You will have to install all the dependencies and packages. You can do this by running yarn or npm install from the root of the project folder to install.

### Development server


#### Running the App

  ``` 
Run yarn start or npm stall from the root of your project to start a dev server. 
Navigate to http://localhost:3000/. 
The app will automatically reload if you make changes to any of the source files.
  ```

## Deployment

You can deploy the application on any server. You can make use of Netlify,a git-based workflow and powerful serverless platform to build, deploy, and collaborate on web apps. Visit [Netlify](https://www.netlify.com/)

## Assumptions/ Thought process: 
- I have assumed that this is a not-so-large application and may require minimal state management. 
So to avoid over-engineering the solution,  I used the React Context API for my state management compared to using other state management libraries like Redux.

 The Context API enables me to share my application state, data, and functionalities between components without having to explicitly pass a prop through every level of my component tree.


- I also have assumed that the data may not be persisted in local storage. So when a book item is added to the cart, on the refresh of the application, the value of the cart state gets reinitialized and its state is set back to zero.


### How I manage the application state:
First, I created the cart Context, which I use to create my application state and functions across different components.

I used the useContext hooks to access my state in the component I need it.

## My Approach to the challenge:
I created the project using create-react-app, a popular command-line tool that enable me to set up react applications with zero or minimal configuration and setup.

Next was to load the data that is stored in the database. 
Having gone through this https://quidax-feec-graphql.herokuapp.com/graphql GraphQL API documentation sent with this challenge,

I implemented GraphQL Queries with Apollo CLient and integrate them with the react UI.

Using  Apollo Client, I was able to send queries with React useQuery React hook.

I first of all defined the GraphQL query I want to
send to the API.

It looks like this;
```
import { gql } from "@apollo/client";
<!--- GraphQL query to fetch all book items -->

export const BOOK_QUERY = gql`
  {
    books {
      id
      title
      subtitle
      publisher
      release_date
      number_of_purchases
      rating
      price
      image_url
      available_copies
      likes
      tags {
        name
      }
    }
  }
`;
```

What’s actually happening with this code is that
 
The BOOK_QUERY variable uses gql, a library that uses tagged template literals to parse the GraphQL query document I defined.

This query document is then passed into the useQuery hook in the BookPage component I created.
 
This hook returns three items that are relevant for my purposes; 

1 - loading:  This is true as long as the request is still ongoing and the response hasn’t been received.

2 - Error: In case the request fails, this field will contain information about what exactly went wrong.

3 - data: This is the actual data, in this case, book items that I received from the server. 

Then I  executed and tested the query in the graphQL Playground (against the application schema) and retrieve the results from the GraphQL server. 

The project was styled using CSS. The React components were implemented using the functional component.


### Requirement not completed:
I have been working on implementing the search functionality on the application. 
This feature is almost in near compIetion. I am yet to complete it. 



## Author

#### James Oyanna
* [GitHub](https://github.com/jamesoyanna)
* [LinkedIn](https://www.linkedin.com/in/jamesoyanna)


`Quidax Book App` Open source software
## Resources

I made use of these `resources` during development.

* [New React Js Doc](https://beta.reactjs.org/)

 * [GraphQl](https://graphql.org/learn/)
    [Apollo Client](https://www.apollographql.com/docs/react/)
* [casscading Style Sheet (CSS)
* [React Context Api](https://reactjs.org/docs/context.html)

