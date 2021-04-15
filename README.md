# Capstone 3 - Spring Boot REST API

The objective of this capstone is to showcase your skills of building a RESTful API using the Spring Boot framework.
This capstone will tie together all your knowledge acquired throughout the bootcamp.  You will be wiring up your Spring Boot back end to the Front End React App you built in Capstone 1.  

___
## UPER - Problem Solving Framework

In the root of this repository, you will find a a pdf file outlining a methodology to approaching & solving any problem.  The file is called : <code>"Polya's Problem Solving Framework.pdf"</code>  Feel free to research and learn more about the framework online, or stick to the .pdf file as a primary reference.

<i>"The problem is to build a spring boot app"</i>

That definitely is the core assignment, but it is not specific enough.  The above statement does not clearly spell out the exact problems that you as the developer are faced with when tackling this project.  The problem needs to cater towards you **specifically**, where you clearly identify what are the issues, blockers, and challenges that lie ahead of you on the path to reach the end goal.  

Clearly defining the problem is often times the most overlooked and vital step to any complicated project.  Get in the habit of contemplating and documenting what the problem is <code><strong>before</strong></code> you start writing code.  

Step 2 of UPER is <strong>Planning</strong>.  After you have brainstormed and thought about the problems facing you as the developer of this java based game, you should clearly map <strong>each</strong> problem to a clear action item.  These action item steps will go in the plan section of the <code>UPER.md</code> document.  

Realize that even Step 2 - Plan, of the Problem Solving framework can also be done <strong>before</strong> you start coding. 

Document the steps you will be taking for this project in the <code>UPER.md</code> file.  

Also, for step 2 of U<strong>P</strong>ER, you will need to create a DB Schema diagram to set up your Database Schema.  You may start with an Entity Relationship (ER) Diagram first, then use that to derive your DB Schema diagram, or go to the DB Schema diagram directly.  You have several options : 

- [Lucidchart](https://www.lucidchart.com/)
- [GenMyModel](https://app.genmymodel.com/)
- [Creately](https://creately.com/diagram-type/class-diagram)
- [dbdiagram.io](https://dbdiagram.io/home)
- [dbdesigner.net](https://www.dbdesigner.net/)
etc.

Step 3 and Step 4 of UPER will most likely be an iterative and recursive process.  As you build out your solution, you may come back and update the execution and reflection phases.

***************************************************************
## Core Features : ⭐️ ⭐️ ⭐️

- RESTful API created with Spring Boot + Spring Data JPA (or Spring Data JDBC)
- Front End React app wired up with the Spring Boot API.
- Basic data model of required entities (Products, Users, etc.)
- Full CRUD functionality on all entities part of the data model 
  - `@GetMapping`
  - `@PostMapping`
  - `@PutMapping` / `@PatchMapping`
  - `@DeleteMapping`
- Relational Database Persistence Layer with MySQL or equivalent
- Spring Boot API connected with React Front End e-commerce app built in Capstone 1
  - (see `capstone-1.md` to review the front end requirements from Capstone 1)
- API documentation
  - [Manual Documentation](https://blog.newrelic.com/engineering/documenting-restful-apis/)
  - [Postman API Docs](https://www.postman.com/api-documentation-tool/)
  - [Spring REST Docs](https://spring.io/projects/spring-restdocs)
  - [OpenAPI](https://springdoc.org/)

****************************************************************
## Advanced Features ⭐️ ⭐️ ⭐️ ⭐️ ⭐️
- Separation of Concerns / Single Responsibility
  - `entities` / `repositories` / `services` / `controllers`, etc.
- Complete Data model including cardinality between related entities
- Error Handling of bad requests for endpoints
- Appropriate Implementation of Status Codes on Responses

****************************************************************
## Optional Features (Not a part of the Grading Rubric)
- Spring Security Authentication using any standard method (in-memory, jdbc, ldap)
- Spring Security Authorization implemented with authorized endpoints available for specific roles
  - `STAFF`/`ADMIN` only accessible endpoints
  - `CUSTOMER` only accessible endpoints (shopping cart for ex.)
  - exposed endpoints (no user login required)
- Spring Boot API deployed and publically available (AWS EC2, Elastic Beanstalk, Lambda, Azure, Heroku, etc.)))

## ********************************************************
## Git Instructions

- [ ] Create a template copy of this repository by clicking : "Use this template"
- [ ] Name the repository the same name as the master template repository.  
- [ ] Select Private Access for your template copy.
- [ ] Add your TM as collaborator
- [ ] Clone YOUR repo to your local computer
- [ ] Create a new branch: <code>git checkout -b `<firstName-lastName>`</code>.
- [ ] Implement the project on your newly created `<firstName-lastName>` branch, committing changes regularly.
- [ ] Push all of your commits: <code>git push origin `<firstName-lastName>`</code>.
- [ ] When ready for your TM to review, open a Pull Request (PR) and add your TM as a collaborator.
## ********************************************************