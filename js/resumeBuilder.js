// var name = "Iain Stewart";
// var formattedName = HTMLheaderName.replace("%data%", name);

// var role = "Junior Software Developer";
// var formattedRole = HTMLheaderRole.replace("%data%", role);

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

var work = {
    "jobs": [
        {
            "employer": "Sabio",
            "title": "Junior Software Developer",
            "location": "Glasgow, Scotland",
            "datesWorked": "2016",
            "description": "Developing telephony products using Java"
        },
        {
            "employer": "EY",
            "title": "IT Risk Consultant",
            "location": "Glasgow, Scotland",
            "datesWorked": "2015",
            "description": "Advised corporate clients on IT risk"
        }
    ]
}

var projects = {
    "projects": [
        {
            "title": "Sample project 1",
            "dates": "Dec 16",
            "description": "",
            "images": ["images/project1.jpg", "images/project2.jpg"]
        }
    ]
}

var bio = {
    "name": "Iain",
    "role": "Junior Software Developer",
    "contacts": {
        "mobile": "07000-123456",
        "email": "iain@gmail.com",
        "github": "istewart13",
        "twitter": "@iain",
        "location": "Glasgow, Scotland"
    },
    "welcomeMessage": "Hey",
    "skills": [
        "Java", "TDD", "Data analysis"
    ],
    "biopic": "images/me.jpg"
}

var education = {
    "schools": [
        {
            "name": "University of Glasgow",
            "location": "Glasgow, Scotland",
            "majors": ["Software Development"],
            "degree dates": "2015",
            "url": "http://www.gla.ac.uk"
        },
        {
            "name": "University of Strathclyde",
            "location": "Glasgow, Scotland",
            "majors": ["Management Science", "Business Technology"],
            "degree dates": "2014",
            "url": "http://www.strath.ac.uk"
        }
    ],
    "onlineCourses": [
        {
            "title": "Intriduction to Programming",
            "school": "Udacity",
            "dates": "2015",
            "url": "https://www.udacity.com/course/intro-to-programming-nanodegree--nd000"
        }
    ]
}

// var education= {};
// education["name"] = "University of Glasgow";
// education["years"] = "2014 - 2015";
// education["city"] = "Glasgow, Scotland";
// $("#main").append(education.name);



// BIO:
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
//     display: function taking no parameters

// PROJECTS:
//     projects: array of objects with
//           title: string
//           dates: string (works with a hyphen between them)
//           description: string
//           images: array with string urls
//     display: function taking no parameters
