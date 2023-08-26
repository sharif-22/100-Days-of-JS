const quizQuestions = [
  {
    id: 0,
    question:
      "Which CSS property is used to change the text color of an element?",
    choices: ["color", "text-color", "font-color", "text-style"],
    correctAnswer: 0,
  },
  {
    id: 1,
    question: "What does CSS stand for?",
    choices: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: 0,
  },
  {
    id: 2,
    question: "What is the correct HTML element for inserting a line break?",
    choices: ["<lb>", "<br>", "<break>", "<linebreak>"],
    correctAnswer: 1,
  },
  {
    id: 3,
    question: "Which programming language is used for web development?",
    choices: ["Python", "Java", "JavaScript", "C++"],
    correctAnswer: 2,
  },
  {
    id: 4,
    question: "Which of the following is not a JavaScript framework?",
    choices: ["React", "Angular", "jQuery", "Bootstrap"],
    correctAnswer: 3,
  },
  {
    id: 5,
    question: "Which HTML tag is used to define an unordered list?",
    choices: ["<ol>", "<dl>", "<li>", "<ul>"],
    correctAnswer: 3,
  },
  {
    id: 6,
    question: "What does API stand for?",
    choices: [
      "Application Programming Interface",
      "Application Protocol Interface",
      "Advanced Programming Interface",
      "Application Process Interface",
    ],
    correctAnswer: 0,
  },
  {
    id: 7,
    question: "Which of the following is not a valid CSS selector?",
    choices: ["#myElement", ".myClass", "$myElement", "body"],
    correctAnswer: 2,
  },
  {
    id: 8,
    question: "What is the purpose of the <head> tag in HTML?",
    choices: [
      "To define the main content of the document",
      "To define the footer of the document",
      "To define the header of the document",
      "To define the metadata and linked resources of the document",
    ],
    correctAnswer: 3,
  },
  {
    id: 9,
    question:
      "Which CSS property is used to control the spacing between letters in a text?",
    choices: ["text-align", "text-transform", "line-height", "letter-spacing"],
    correctAnswer: 3,
  },
  {
    id: 10,
    question: "Which JavaScript keyword is used to declare a variable?",
    choices: ["var", "let", "const", "variable"],
    correctAnswer: 0,
  },
  {
    id: 11,
    question: "Which of the following is not a valid HTTP status code?",
    choices: [
      "200 OK",
      "404 Not Found",
      "500 Internal Server Error",
      "302 Page Moved",
    ],
    correctAnswer: 3,
  },
  {
    id: 12,
    question: "What does the CSS property 'display: none' do?",
    choices: [
      "Hides the element",
      "Shows the element",
      "Changes the element's font",
      "Adds a border to the element",
    ],
    correctAnswer: 0,
  },
  {
    id: 13,
    question: "Which event is triggered when a user clicks on an HTML element?",
    choices: ["mouseover", "keydown", "click", "scroll"],
    correctAnswer: 2,
  },
  {
    id: 14,
    question:
      "Which of the following is an example of a self-closing HTML tag?",
    choices: ["<p>", "<div>", "<span>", "<img>"],
    correctAnswer: 3,
  },
  {
    id: 15,
    question: "Which CSS property is used to add shadows to elements?",
    choices: ["box-shadow", "text-shadow", "shadow-effect", "element-shadow"],
    correctAnswer: 0,
  },
  {
    id: 16,
    question: "Which of the following is a server-side programming language?",
    choices: ["HTML", "CSS", "JavaScript", "PHP"],
    correctAnswer: 3,
  },
  {
    id: 17,
    question: "What does the HTML acronym DOCTYPE stand for?",
    choices: [
      "Document Type",
      "Document Transition",
      "Document Style",
      "Document Code",
    ],
    correctAnswer: 0,
  },
  {
    id: 18,
    question: "Which CSS property is used to set the size of a font?",
    choices: ["font-weight", "font-size", "font-family", "font-color"],
    correctAnswer: 1,
  },
  {
    id: 19,
    question: "What does the 'href' attribute in an anchor tag specify?",
    choices: [
      "The text content of the link",
      "The URL of the link destination",
      "The CSS style of the link",
      "The target window of the link",
    ],
    correctAnswer: 1,
  },
  {
    id: 20,
    question: "Which HTML tag is used to define a table header?",
    choices: ["<thead>", "<th>", "<table-header>", "<h1>"],
    correctAnswer: 1,
  },
  {
    id: 21,
    question: "Which of the following is not a valid CSS positioning property?",
    choices: ["static", "relative", "dynamic", "absolute"],
    correctAnswer: 2,
  },
  {
    id: 22,
    question:
      "Which JavaScript method is used to remove the last element from an array?",
    choices: [".pop()", ".push()", ".shift()", ".unshift()"],
    correctAnswer: 0,
  },
  {
    id: 23,
    question: "What does the acronym SQL stand for?",
    choices: [
      "Structured Query Language",
      "Sequential Query Language",
      "Standard Query Language",
      "Semantic Query Language",
    ],
    correctAnswer: 0,
  },
  {
    id: 24,
    question: "Which of the following is an example of a CSS preprocessor?",
    choices: ["jQuery", "Sass", "React", "Node.js"],
    correctAnswer: 1,
  },
  {
    id: 25,
    question:
      "Which CSS property is used to add rounded corners to an element?",
    choices: ["border-radius", "corner-radius", "border-style", "box-shadow"],
    correctAnswer: 0,
  },
  {
    id: 26,
    question: "What is the purpose of the CSS property 'z-index'?",
    choices: [
      "To control the visibility of an element",
      "To set the font size of an element",
      "To adjust the spacing between elements",
      "To specify the stacking order of elements",
    ],
    correctAnswer: 3,
  },
  {
    id: 27,
    question:
      "Which JavaScript method is used to add elements to the end of an array?",
    choices: [".push()", ".pop()", ".shift()", ".unshift()"],
    correctAnswer: 0,
  },
  {
    id: 28,
    question: "What does the term 'responsive web design' refer to?",
    choices: [
      "Designing websites that load quickly",
      "Designing websites with dynamic content",
      "Designing websites that adapt to different screen sizes",
      "Designing websites with interactive user interfaces",
    ],
    correctAnswer: 2,
  },
  {
    id: 29,
    question: "Which of the following is not a valid HTML5 semantic element?",
    choices: ["<header>", "<div>", "<section>", "<footer>"],
    correctAnswer: 1,
  },
  {
    id: 30,
    question: "What is the purpose of the CSS property 'box-sizing'?",
    choices: [
      "To control the box model of an element",
      "To set the background color of an element",
      "To define the layout of an element",
      "To adjust the opacity of an element",
    ],
    correctAnswer: 0,
  },
  {
    id: 31,
    question: "Which of the following is a front-end JavaScript framework?",
    choices: ["Django", "Ruby on Rails", "Vue.js", "Express.js"],
    correctAnswer: 2,
  },
  {
    id: 32,
    question: "What does the HTML tag <canvas> allow you to do?",
    choices: [
      "Embed audio files",
      "Display images",
      "Create and manipulate graphics",
      "Play videos",
    ],
    correctAnswer: 2,
  },
  {
    id: 33,
    question:
      "Which JavaScript method is used to convert a string to lowercase?",
    choices: [".toLowerCase()", ".toUpperCase()", ".substring()", ".charAt()"],
    correctAnswer: 0,
  },
  {
    id: 34,
    question: "What does the CSS property 'float' do?",
    choices: [
      "Aligns text vertically",
      "Adjusts the spacing between elements",
      "Controls the positioning of an element",
      "Changes the font style of an element",
    ],
    correctAnswer: 2,
  },
  {
    id: 35,
    question:
      "Which CSS property is used to control the appearance of a hyperlink that hasn't been visited?",
    choices: ["text-decoration", "color", "background-color", "font-weight"],
    correctAnswer: 0,
  },
  {
    id: 36,
    question: "What does the term 'AJAX' stand for?",
    choices: [
      "Asynchronous JavaScript and XML",
      "Active JavaScript and XML",
      "Advanced JavaScript and XHTML",
      "Asynchronous JavaScript and XHTML",
    ],
    correctAnswer: 0,
  },
  {
    id: 37,
    question: "Which of the following is a CSS framework?",
    choices: ["Vue.js", "React", "Bootstrap", "Angular"],
    correctAnswer: 2,
  },
  {
    id: 38,
    question: "What does the JavaScript 'typeof' operator return for an array?",
    choices: ["'array'", "'object'", "'array'", "'null'"],
    correctAnswer: 1,
  },
  {
    id: 39,
    question: "Which HTML tag is used to define a navigation menu?",
    choices: ["<nav>", "<menu>", "<navmenu>", "<ul>"],
    correctAnswer: 0,
  },
  {
    id: 40,
    question: "What does the CSS property 'position: fixed' do?",
    choices: [
      "Fixes the element's position relative to its parent",
      "Fixes the element's position relative to the viewport",
      "Fixes the element's position to the top of the document",
      "Fixes the element's position to the bottom of the document",
    ],
    correctAnswer: 1,
  },
  {
    id: 41,
    question: "Which of the following is not a version control system?",
    choices: ["Git", "Subversion", "Mercurial", "Node.js"],
    correctAnswer: 3,
  },
  {
    id: 42,
    question: "What does the HTML tag <aside> represent?",
    choices: [
      "A section of content that is tangentially related to the main content",
      "A block of code",
      "A section containing a figure or image",
      "A section that defines the main content of the document",
    ],
    correctAnswer: 0,
  },
  {
    id: 43,
    question:
      "Which JavaScript method is used to round a number to the nearest integer?",
    choices: [".floor()", ".ceil()", ".round()", ".toFixed()"],
    correctAnswer: 2,
  },
  {
    id: 44,
    question: "Which of the following is not a valid HTTP request method?",
    choices: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: 3,
  },
  {
    id: 45,
    question:
      "Which CSS property is used to control the order of flexible items in a flex container?",
    choices: ["flex-wrap", "flex-direction", "order", "align-items"],
    correctAnswer: 2,
  },
  {
    id: 46,
    question: "What does the term 'RESTful API' refer to?",
    choices: [
      "An API that can only be accessed using the HTTP POST method",
      "An API that supports only JSON data format",
      "An API that follows the principles of Representational State Transfer",
      "An API that requires authentication for all requests",
    ],
    correctAnswer: 2,
  },
  {
    id: 47,
    question: "Which of the following is a database management system?",
    choices: ["HTML", "CSS", "MySQL", "React"],
    correctAnswer: 2,
  },
  {
    id: 48,
    question: "What is the purpose of the HTML <form> tag?",
    choices: [
      "To define a section of text that provides additional information",
      "To display a table of data",
      "To create a container for interactive form controls",
      "To apply styles to a specific area of a web page",
    ],
    correctAnswer: 2,
  },
  {
    id: 49,
    question:
      "Which JavaScript method is used to remove the first element from an array?",
    choices: [".pop()", ".push()", ".shift()", ".unshift()"],
    correctAnswer: 2,
  },
  {
    id: 50,
    question:
      "Which CSS property is used to create space between the content and the border of an element?",
    choices: ["padding", "margin", "border-spacing", "spacing"],
    correctAnswer: 0,
  },
  {
    id: 51,
    question: "What does the term 'SEO' stand for?",
    choices: [
      "Social Engagement Optimization",
      "Search Engine Optimization",
      "Structured Element Organization",
      "Semantic Entity Optimization",
    ],
    correctAnswer: 1,
  },
  {
    id: 52,
    question: "Which of the following is a back-end programming language?",
    choices: ["HTML", "CSS", "JavaScript", "Python"],
    correctAnswer: 3,
  },
  {
    id: 53,
    question: "What does the HTML <blockquote> tag represent?",
    choices: [
      "A section that defines the main content of the document",
      "A section containing a figure or image",
      "A long quotation",
      "A block of code",
    ],
    correctAnswer: 2,
  },
  {
    id: 54,
    question:
      "Which of the following is a JavaScript framework for building user interfaces?",
    choices: ["Express.js", "React", "Vue.js", "Django"],
    correctAnswer: 1,
  },
  {
    id: 55,
    question:
      "Which CSS property is used to create an underline effect on text?",
    choices: ["text-decoration", "font-style", "text-transform", "line-height"],
    correctAnswer: 0,
  },
  {
    id: 56,
    question: "What does the term 'CMS' stand for?",
    choices: [
      "Client Management System",
      "Code Management System",
      "Content Management System",
      "Cascading Media Stylesheet",
    ],
    correctAnswer: 2,
  },
  {
    id: 57,
    question:
      "Which of the following is a front-end framework for building user interfaces?",
    choices: ["Node.js", "Express.js", "Angular", "Django"],
    correctAnswer: 2,
  },
  {
    id: 58,
    question: "What does the JavaScript method 'parseInt()' do?",
    choices: [
      "Converts a string to a floating-point number",
      "Converts a string to an integer",
      "Converts a number to a string",
      "Returns the length of a string",
    ],
    correctAnswer: 1,
  },
  {
    id: 59,
    question: "What does the CSS property 'display: none' do?",
    choices: [
      "Hides an element from the page without affecting the layout",
      "Applies a solid color as the background of an element",
      "Adjusts the spacing between elements",
      "Changes the font style of an element",
    ],
    correctAnswer: 0,
  },
  {
    id: 60,
    question:
      "Which CSS property is used to change the font family of an element?",
    choices: ["font-family", "font-style", "font-size", "font-weight"],
    correctAnswer: 0,
  },
  {
    id: 61,
    question: "What does the term 'API' stand for?",
    choices: [
      "Application Programming Interface",
      "Advanced Programming Interface",
      "Automated Programming Interface",
      "Application Process Interface",
    ],
    correctAnswer: 0,
  },
  {
    id: 62,
    question: "Which of the following is a server-side scripting language?",
    choices: ["JavaScript", "Python", "React", "Angular"],
    correctAnswer: 1,
  },
  {
    id: 63,
    question: "What does the HTML <code> tag represent?",
    choices: [
      "A section that defines the main content of the document",
      "A section containing a figure or image",
      "A block of code",
      "A section of text that provides additional information",
    ],
    correctAnswer: 2,
  },
  {
    id: 64,
    question:
      "Which of the following is a popular CSS framework for building responsive websites?",
    choices: ["jQuery", "Sass", "Bootstrap", "Node.js"],
    correctAnswer: 2,
  },
  {
    id: 65,
    question:
      "Which CSS property is used to control the size of an element's font?",
    choices: ["font-size", "font-family", "font-weight", "font-style"],
    correctAnswer: 0,
  },
  {
    id: 66,
    question: "What does the term 'URL' stand for?",
    choices: [
      "Uniform Resource Locator",
      "Unified Resource Language",
      "Universal Resource Link",
      "Uniform Resource Link",
    ],
    correctAnswer: 0,
  },
  {
    id: 67,
    question: "Which of the following is a popular front-end build tool?",
    choices: ["Webpack", "Git", "npm", "Docker"],
    correctAnswer: 0,
  },
  {
    id: 68,
    question: "What does the JavaScript method 'substring()' do?",
    choices: [
      "Returns the character at a specified index",
      "Extracts a portion of a string and returns a new string",
      "Replaces a specified value with another value",
      "Converts a string to uppercase",
    ],
    correctAnswer: 1,
  },
  {
    id: 69,
    question: "Which of the following is not a valid CSS color value?",
    choices: [
      "#FF0000",
      "rgb(255, 255, 0)",
      "hsl(120, 100%, 50%)",
      "cmyk(0, 100%, 100%, 0)",
    ],
    correctAnswer: 3,
  },
  {
    id: 70,
    question:
      "Which CSS property is used to control the space between lines of text?",
    choices: ["line-height", "letter-spacing", "word-spacing", "text-indent"],
    correctAnswer: 0,
  },
  {
    id: 71,
    question: "What does the term 'DOM' stand for?",
    choices: [
      "Document Object Model",
      "Data Object Model",
      "Dynamic Object Method",
      "Direct Object Manipulation",
    ],
    correctAnswer: 0,
  },
  {
    id: 72,
    question:
      "Which of the following is a popular back-end framework for building web applications?",
    choices: ["Vue.js", "Angular", "Ruby on Rails", "Bootstrap"],
    correctAnswer: 2,
  },
  {
    id: 73,
    question: "What does the HTML <em> tag represent?",
    choices: [
      "An emphasized text",
      "A section containing a figure or image",
      "A block of code",
      "A section of text that provides additional information",
    ],
    correctAnswer: 0,
  },
  {
    id: 74,
    question: "Which of the following is a CSS preprocessor?",
    choices: ["HTML", "CSS", "Sass", "React"],
    correctAnswer: 2,
  },
  {
    id: 75,
    question: "Which CSS property is used to add shadows to elements?",
    choices: ["box-shadow", "text-shadow", "shadow-color", "element-shadow"],
    correctAnswer: 0,
  },
  {
    id: 76,
    question: "What does the term 'SPA' stand for in web development?",
    choices: [
      "Single Page Application",
      "Server Performance Analysis",
      "Structured Programming Algorithm",
      "Session Persistence Architecture",
    ],
    correctAnswer: 0,
  },
  {
    id: 77,
    question:
      "Which of the following is a popular JavaScript library for manipulating and traversing HTML documents?",
    choices: ["jQuery", "React", "Vue.js", "Angular"],
    correctAnswer: 0,
  },
  {
    id: 78,
    question: "What does the JavaScript method 'push()' do?",
    choices: [
      "Removes the last element from an array",
      "Adds one or more elements to the beginning of an array",
      "Adds one or more elements to the end of an array",
      "Sorts the elements of an array",
    ],
    correctAnswer: 2,
  },
  {
    id: 79,
    question: "Which of the following is not a valid HTML form input type?",
    choices: ["text", "checkbox", "date", "float"],
    correctAnswer: 3,
  },
  {
    id: 80,
    question:
      "Which CSS property is used to create a flexible grid-based layout?",
    choices: ["flexbox", "grid", "float", "position"],
    correctAnswer: 1,
  },
  {
    id: 81,
    question: "What does the term 'UX' stand for in web development?",
    choices: [
      "User Experience",
      "User Exception",
      "User Extension",
      "User Execution",
    ],
    correctAnswer: 0,
  },
  {
    id: 82,
    question:
      "Which of the following is a popular back-end JavaScript runtime environment?",
    choices: ["Node.js", "React", "Angular", "Vue.js"],
    correctAnswer: 0,
  },
  {
    id: 83,
    question: "What does the HTML <img> tag represent?",
    choices: [
      "An image",
      "A section containing a figure or image",
      "A block of code",
      "A section of text that provides additional information",
    ],
    correctAnswer: 0,
  },
  {
    id: 84,
    question:
      "Which of the following is a CSS framework that provides a responsive grid system?",
    choices: ["jQuery", "Bootstrap", "Sass", "Django"],
    correctAnswer: 1,
  },
  {
    id: 85,
    question:
      "Which CSS property is used to control the visibility of an element?",
    choices: ["opacity", "visibility", "display", "position"],
    correctAnswer: 1,
  },
  {
    id: 86,
    question: "What does the term 'HTTP' stand for?",
    choices: [
      "HyperText Transfer Protocol",
      "HyperText Markup Protocol",
      "Hyper Transfer Markup Protocol",
      "Hyper Transfer Text Protocol",
    ],
    correctAnswer: 0,
  },
  {
    id: 87,
    question:
      "Which of the following is a popular JavaScript framework for building web applications?",
    choices: ["jQuery", "React", "Vue.js", "Angular"],
    correctAnswer: 1,
  },
  {
    id: 88,
    question: "What does the JavaScript method 'concat()' do?",
    choices: [
      "Joins two or more arrays and returns a new array",
      "Reverses the order of the elements in an array",
      "Returns the first element that satisfies a given condition",
      "Sorts the elements of an array",
    ],
    correctAnswer: 0,
  },
  {
    id: 89,
    question: "Which of the following is not a valid CSS positioning value?",
    choices: ["static", "relative", "absolute", "fixed"],
    correctAnswer: 3,
  },
  {
    id: 90,
    question:
      "Which CSS property is used to change the background color of an element?",
    choices: ["background-color", "color", "border-color", "text-color"],
    correctAnswer: 0,
  },
  {
    id: 91,
    question: "What does the term 'API endpoint' refer to?",
    choices: [
      "The server-side code that handles API requests",
      "The URL that clients can use to access API resources",
      "The database table that stores API data",
      "The API documentation for developers",
    ],
    correctAnswer: 1,
  },
  {
    id: 92,
    question:
      "Which of the following is a popular front-end framework for building responsive web applications?",
    choices: ["React", "Node.js", "Express.js", "Django"],
    correctAnswer: 0,
  },
  {
    id: 93,
    question: "What does the HTML <ul> tag represent?",
    choices: [
      "An unordered list",
      "An ordered list",
      "A list item",
      "A block of code",
    ],
    correctAnswer: 0,
  },
  {
    id: 94,
    question:
      "Which of the following is a CSS methodology that promotes scalable and maintainable stylesheets?",
    choices: [
      "BEM (Block Element Modifier)",
      "Sass (Syntactically Awesome Style Sheets)",
      "LESS (Leaner Style Sheets)",
      "OOCSS (Object-Oriented CSS)",
    ],
    correctAnswer: 0,
  },
  {
    id: 95,
    question:
      "Which CSS property is used to set the space between the content and the border of an element?",
    choices: ["padding", "margin", "border", "outline"],
    correctAnswer: 0,
  },
  {
    id: 96,
    question: "What does the term 'AJAX' stand for in web development?",
    choices: [
      "Asynchronous JavaScript and XML",
      "Active JavaScript and XML",
      "Advanced JSON and XML",
      "Automated JavaScript and XML",
    ],
    correctAnswer: 0,
  },
  {
    id: 97,
    question:
      "Which of the following is a popular CSS framework for building responsive and mobile-first websites?",
    choices: ["Bootstrap", "jQuery", "Angular", "Vue.js"],
    correctAnswer: 0,
  },
  {
    id: 98,
    question: "What does the JavaScript method 'slice()' do?",
    choices: [
      "Returns the character at a specified index",
      "Extracts a portion of a string and returns a new string",
      "Replaces a specified value with another value",
      "Sorts the elements of an array",
    ],
    correctAnswer: 1,
  },
  {
    id: 99,
    question: "What does the HTML <a> tag represent?",
    choices: [
      "A hyperlink",
      "An image",
      "A form input field",
      "A block of code",
    ],
    correctAnswer: 0,
  },
];

export default quizQuestions;
