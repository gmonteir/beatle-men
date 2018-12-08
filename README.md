# group-formation-beatle-men
**Name**: Beatle Men

**Members**: Derek Kelley, Ilya Minarov, Joey Johnson, Andrew Khov, Garrett Monteiro

**Motto**: Git it Done!

**Pizza Topping**: Sausage

## Roles: 

**Team Lead**: Derek Kelley

**QA Lead**: Ilya Minarov

**Architect**: Joey Johnson

**UI Lead**: Andy Khov

**API Lead**: Garrett Monteiro

## How to Start App:
### Front-End (App Directory):
To run: `npm run serve`

To run unit tests: `npm run test:unit`

To run e2e tests:
 - open cypress: `./node_modules/.bin/cypress open`
 - click `test.js` in the cypress GUI
### Back-End (Server Directory):
To run:

start your mysql server
 - run `sequelize db:create`
 - run `sequelize db:migrate`
 - run `sequelize db:seed:all`

start server: `npm run start`

To test:
 - run `sequelize db:create --env=test`
 - run `sequelize db:migrate --env=test`
 - run `sequelize db:seed:all --env=test`
 - run `npm run test`

Admin login:
 - email: troll@demo.com
 - password: secure

