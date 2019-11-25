//container
let container = document.getElementById("container");

//corner logo
let logo = document.createElement("img");
logo.src = "images/logo.jpg";

//header menu
let header = document.createElement("Header");
header.id = "header";
//header menu items
let homeMenuItem = document.createElement("div");
homeMenuItem.innerHTML = "Home";

let categoriesMenuItem = document.createElement("div");
categoriesMenuItem.innerHTML = "Categories";

//adding menu items to header menu
header.appendChild(homeMenuItem);
header.appendChild(categoriesMenuItem);

//Curse reviews section
let curseReviews = document.createElement("div");
curseReviews.className = "curseReviews";

let curseText = document.createElement("p");
curseText.innerHTML =
  "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews.";

let curseTitle = document.createElement("h1");
curseTitle.innerHTML = "The Curse of the Current Reviews";

let curseButton = document.createElement("button");
curseButton.innerHTML = "Read more";

//Appending cursed elements
curseReviews.appendChild(curseTitle);
curseReviews.appendChild(curseText);
curseReviews.appendChild(curseButton);

//articles section
let articleContainer = document.createElement("div");
articleContainer.className = "articleContainer";

let spanOne = document.createElement("span");
let articleOne = document.createElement("p");
spanOne.innerHTML = "Hello WatchKit";
articleOne.innerHTML =
  "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.";

let spanTwo = document.createElement("span");
let articleTwo = document.createElement("p");
spanTwo.innerHTML =
  "Creating Gravity Enabled Notification Banner Control in iOS 7 ";
articleTwo.innerHTML =
  "iOS 7 framework introduced many new features which allowed the developers to create the next generation of applications. One of the most interesting feature is UIKit Dynamics framework. UIKit Dynamics allows the developer to create physics enabled effects which users can relate to the real world. In this article we are going to implement a notification banner control which utilizes the features provided by the UIKit Dynamics framework. ";

let spanThree = document.createElement("span");
let articleThree = document.createElement("p");
spanThree.innerHTML = "Introduction to Swift";
articleThree.innerHTML =
  "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started. ";

let spanFour = document.createElement("span");
let articleFour = document.createElement("p");
spanFour.innerHTML = "Tilt Scrolling Using Core Motion";
articleFour.innerHTML =
  " The tilt to scroll functionality has become an integral part of any text heavy application. The first time we got introduced to the tilt to scroll functionality was through the Instapaper application. In this article we will demonstrate how to implement this functionality using Core Motion API. ";

let spanFive = document.createElement("span");
let articleFive = document.createElement("p");
spanFive.innerHTML = "Creating a Flipping Tweets View";
articleFive.innerHTML =
  "The number of ways that you can display a Twitter feed in your app is only limited by your imagination. In this article we will demonstrate how you can implement a flipping view which displays the tweets inside your app. ";

articleContainer.appendChild(spanOne);
articleContainer.appendChild(articleOne);
articleContainer.appendChild(spanTwo);
articleContainer.appendChild(articleTwo);
articleContainer.appendChild(spanThree);
articleContainer.appendChild(articleThree);
articleContainer.appendChild(spanFour);
articleContainer.appendChild(articleFour);
articleContainer.appendChild(spanFive);
articleContainer.appendChild(articleFive);

//appending elements to page
document.body.prepend(logo);
container.appendChild(header);
container.appendChild(curseReviews);
container.appendChild(articleContainer);
