<a name="readme-top"></a>

Vocabulary Extender

## Table of Contents

- [About The Project](#about-the-project)
- [Project Spec](#project-spec)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Reflections](#reflections)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

---

## About The Project

This app is designed to return the top stories from the New York Times TopStories API and display simple information that links to the NY Times website's full article.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Project Spec

The NYT-Reader (module 3 showcase project) was built in the final week of [Turing School of Software and Design](https://turing.edu/) front-end engineering program. The goals of this [solo project](https://frontend.turing.edu/projects/module-3/showcase.html) were to:

- Utilize React and React Router
- Make network requests to API endpoints to retrieve and manipulate data
- Display both simple and detailed views of the data

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Technologies

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

# Getting Started

You can find the project [here](https://github.com/willhobson85/nyt-reader) and follow the instructions below to get started.

### Installation

1. Clone the repo
   ```sh
   git clone git@github.com:willhobson85/nyt-reader.git
   ```
2. Install NPM packages
   ```sh
   npm install
   npm start
   ```
3. Explore the website.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

![NYT-Reader](https://media.giphy.com/media/JetBvLAhrBGUnQD7Ff/giphy.gif)

Future Features:
- Implement a local storage to save cards upon refresh.
- Create an option to change the font for easier reading.
- Implement a way for users to check their spelling before searching.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Testing

I utilized testing to create a smooth user experience using [Cypress](https://www.cypress.io/).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Reflections

I thought this would be an easy and straightforward project to complete. The biggest blocker I ran into was getting articles with question marks in the titles to display correctly. When I was trying to map over the titles, it stopped before the question mark. I got around this by filtering the articles with a question mark in the title out and mapping over the remaining articles. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

![Contributors][contributors-shield]

Will Hobson - [LinkedIn](https://www.linkedin.com/in/the-william-hobson/) [GitHub](https://github.com/willhobson85)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

The following resources helped us build this project:

[![MDN Docs][mdn-shield]][mdn]
[![Turing School](https://img.shields.io/badge/Turing_School-030303?style=for-the-badge)](https://turing.edu/)


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[mdn-shield]: https://img.shields.io/badge/MDN_Web_Docs-black?style=for-the-badge&logo=mdnwebdocs&logoColor=white
[mdn]: https://developer.mozilla.org/en-US/
[contributors-shield]: https://img.shields.io/badge/Contributors-1-2ea44f?style=for-the-badge
