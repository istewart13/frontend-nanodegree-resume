/*
This is empty on purpose! Your code to build the resume will go here.
*/

// $("#main").append("Iain Stewart");
var awesomeThoughts = "AWESOME";
var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);

var name = "Iain Stewart";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);

// BIO:
    // name : string
    // role : string
    // contacts : an object with
    //       mobile: string
    //       email: string 
    //       github: string
    //       twitter: string (optional)
    //       location: string
    // welcomeMessage: string 
    // skills: array of strings
    // biopic: url
    // display: function taking no parameters

// EDUCATION:
//     schools: array of objects with
//          name: string
//          location: string
//          degree: string
//          majors: array of strings
//          dates: string (works with a hyphen between them)
//          url: string
//     onlineCourses: array of objects with
//          title: string
//          school: string
//          date: string (works with a hyphen between them)
//          url: string
//     display: function taking no parameters

// WORK:
//     jobs: array of objects with
//          employer: string 
//          title: string 
//          location: string 
//          dates: string (Can be 'in progress')
//          description: string 
//     display: function taking no parameters

// PROJECTS:
//     projects: array of objects with
//           title: string 
//           dates: string (works with a hyphen between them)
//           description: string
//           images: array with string urls
//     display: function taking no parameters