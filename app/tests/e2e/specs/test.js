// https://docs.cypress.io/api/introduction/api.html

describe('Test that visits home page', () => {
  it('Visits the app root url', () => {
    cy.visit('localhost:8080');
    cy.contains('h1', 'Announcements');
    cy.contains('h1', 'Sponsors');
    cy.url().should('include', '/home');
  });
});

describe('Test that visits each page when not logged in', () => {
  it('Should visit Shop page', () => {
    cy.visit('localhost:8080/shop');
    cy.url().should('include', '/shop');
    cy.contains('h1', 'Shop');
    cy.contains('h1', 'Filter By:');
  });
  it('Should visit Services page', () => {
    cy.visit('localhost:8080/services');
    cy.url().should('include', '/services');
    cy.contains('h1', 'Foxcycle Services');
    cy.contains('h3', 'Basic Tune');
    cy.contains('h4', '$100');
    cy.contains('li', 'Adjust brakes');
    cy.contains('h3', 'Gold Tune');
    cy.contains('h4', '$150');
    cy.contains('li', 'Full drivetrain replacement');
    cy.contains('h3', 'Platinum Tune');
    cy.contains('h4', '$200');
    cy.contains('li', 'Hydraulic brake bleed');
    cy.contains('button', 'Call Now');
  });
  it('Should visit About page', () => {
    cy.visit('localhost:8080/about');
    cy.url().should('include', '/about');
    cy.get('div.hero-body');
    cy.contains('About');
    cy.contains('Information and History');
    cy.contains('p');
    cy.contains('Foxcycle San Luis Obispo');
    cy.contains('td', 'Monday');
    cy.contains('td', 'Tuesday');
    cy.contains('td', 'Wednesday');
    cy.contains('td', 'Thursday');
    cy.contains('td', 'Friday');
    cy.contains('p', 'Kristofer Fox');
    cy.contains('p', 'Owner');
    cy.contains('p', 'fox@foxcycle.com');
    cy.contains('p', 'Jane Smith');
    cy.contains('p', 'Service Manager');
    cy.contains('p', 'jsmith@foxcycle.com');
    cy.contains('p', 'Elon Musk');
    cy.contains('p', 'Service Employee');
    cy.contains('emusk@foxcycle.com');
    cy.contains('p', 'Kobe Bryant');
    cy.contains('p', 'kbryant@foxcycle.com');
    cy.contains('p', 'Donald Trump');
    cy.contains('p', 'dtrump@foxcycle.com');
    cy.contains('p', 'Frank Ocean');
    cy.contains('p', 'frocean@foxcycle.com');
  });
  it('Should visit Login modal', () => {
    cy.visit('localhost:8080/login');
    cy.url().should('include', '/login');
    cy.contains('Login');
    cy.contains('Email');
    cy.contains('Password');
    cy.contains('button', 'Close');
    cy.contains('button', 'Submit');
    cy.get('input').should('be.visible');
  });
  it('Should visit Signup modal', () => {
    cy.visit('localhost:8080/signup');
    cy.url().should('include', '/signup');
    cy.contains('Full Name');
    cy.contains('Sign Up');
    cy.contains('Email');
    cy.contains('Password');
    cy.get('input').should('be.visible');
  });
  it('Should visit Shopping Cart page', () => {
    cy.visit('localhost:8080/cart');
    cy.url().should('include', '/cart');
    cy.contains('Shopping Cart');
    cy.contains('Total Number of Items:');
    cy.contains('Subtotal: $');
    cy.contains('button', 'Checkout');
    cy.contains('h1', 'Product');
    cy.contains('h1', 'Price');
    cy.contains('h1', 'Quantity');
    cy.contains('h1', 'Total');
  });
});

describe('Test for login functionality', () => {
  it('Should fail to login with empty fields', () => {
    cy.visit('localhost:8080/login');
    cy.url().should('include', '/login');
    cy.get('button[id="submit-btn"]').click();
    cy.contains('Invalid Email');
    cy.contains('Invalid Password');
  });
  it('Should fail to login with incorrect credentials', () => {
    cy.visit('localhost:8080/login');
    cy.url().should('include', '/login');
    cy.get('input[type="email"]').type('andyandyandy@xyz.com');
    cy.get('input[type="password"').type('chachachacha1234');
    cy.get('button[id="submit-btn"]').click();
    cy.contains('Login Fail');
  });
  it('Should login with email (troll@demo.com) and password (secure) and visit Account page', () => {
    cy.visit('localhost:8080/home');
    cy.url().should('include', '/home');
    cy.contains('Log In').click({ force: true });
    cy.get('input[type="email"]').type('troll@demo.com');
    cy.get('input[type="password"').type('secure');
    cy.get('button[id="submit-btn"]').click();
    cy.contains('Login Successful!');
    cy.contains('Close').click();
    cy.contains('Account').click({ force: true });
    cy.contains('John Doe');
  });
});

describe('Test for signup functionality', () => {
  it('Should fail to signup with empty fields', () => {
    cy.visit('localhost:8080/signup');
    cy.url().should('include', '/signup');
    cy.get('button[id="submit-btn"]').click();
    cy.contains('Invalid Name');
    cy.contains('Invalid Email');
    cy.contains('Password length must be greater than 5 characters');
  });
  it('Should signup successfully', () => {
    const randomNum = Math.random().toString(36).substring(2, 15)
      + Math.random().toString(36).substring(2, 15);
    const email = randomNum.toString(36).substring(8).concat('@gmail.com');
    const password = randomNum.toString(36).substring(10);
    cy.visit('localhost:8080/signup');
    cy.url().should('include', '/signup');
    cy.get('input[id="first-name-input"]').type('firstName');
    cy.get('input[id="last-name-input"]').type('lastName');
    cy.get('input[id="email-input"]').type(email);
    cy.get('input[id="password-input"]').type(password);
    cy.get('button[id="submit-btn"]').click();
    cy.contains('Registration Successful!');
  });
});

describe('Test for add to cart functionality', () => {
  it('Should successfully add "electric bike" item to cart', () => {
    cy.visit('localhost:8080/shop');
    cy.url().should('include', '/shop');
    cy.get('a[id="item-name"]').click();
    cy.get('a[id="add-btn"]').click();
    cy.contains('Added to Cart Successfully!');
    cy.contains('Close').click();
    cy.contains('Cart').click({ force: true });
    cy.contains('electric bike');
  });
});
