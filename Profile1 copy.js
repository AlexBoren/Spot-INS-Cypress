//    ./node_modules/.bin/cypress open
var random = Math.floor(Math.random() * 5) +1
var petNAME = ''
var zip = ''
var humanF = ''
var humanL = ''
var petAGE = ''
var petSIZE = ''

if (random == 1) {
  petNAME = 'Dog'
  zip = 33401
  humanF = 'Jane'
  humanL = 'Doe'
  petAGE = '1'
  petSIZE = 'Small Mix'
} else if (random == 2){
  petNAME = 'Pup'
  zip = 33402
  humanF = 'John'
  humanL = 'Doe'
  petAGE = '2'
  petSIZE = 'Small Mix'
} else if (random == 3){
  petNAME = 'Dog'
  zip = 33403
  humanF = 'Name'
  humanL = 'Test'
  petAGE = '3'
  petSIZE = 'Meduim Mix'
} else if (random = 4){
  petNAME = 'Puppy'
  zip = 33404
  humanF = 'Fake'
  humanL = 'Name'
  petAGE = '4'
  petSIZE = 'Large Mix'
} else if (random == 5){
  petNAME = 'Doggie'
  zip = 33405
  humanF = 'Test'
  humanL = 'Name'
  petAGE = '5'
  petSIZE = 'Giant Mix'
}


describe('Website', () => {
  it('Runs Spot', () => {
    cy.visit('https://staging.spotpetins.com', {
  auth: {
    username: 'stagespot',
    password: 'Spot@123!',
  },
      }) 
  })
})


describe('Home Page Check', () => {
  it('Checks to see if everything exists and can be seen', () => {
    //Start
    cy.get('#main-header').should('be.visible')
    cy.get('#main-footer').should('be.visible')

    //Check
    cy.contains('GET STARTED').should('be.visible')
    cy.contains("My Pet's Name is").should('be.visible')
    cy.get('#input_49_1').should('be.visible')
    cy.get('#gform_submit_button_49').should('be.visible')
    cy.get('[alt="quote-dog_web"]').should('be.visible')
    cy.contains('Tell us more so we can fetch a great plan for you.').should('be.visible')
    cy.contains("Let's get your").should('be.visible')
    cy.contains('pet covered').should('be.visible')
    cy.get('[alt="SPOT_Amazon_Web-Banners-Summer"]').should('be.visible')
    cy.get('#input_55_2').should('be.visible')
    cy.get('#input_55_3').should('be.visible')
    cy.get('#gform_submit_button_55').should('be.visible')
  })
})


describe('Home Page Enter', () => {
  it('Types into the input and presses submit', () => {
    cy.get('#input_49_1').type(petNAME)
    cy.get('#gform_submit_button_49').click()
  })
})




describe('My Pet Check', () => {
  it('Checks to see if everything exists and can be seen', () => {
    //Start
    //cy.url().should('contains', 'https://spotpetins.com/quote/start/')
    cy.get('#main-header').should('be.visible')
    cy.get('#main-header').should('be.visible')
    cy.get('#main-footer').should('be.visible')

    //Check
    cy.contains('Pet Details').should('be.visible')
    cy.contains('Personal Details').should('be.visible')
    cy.contains
    ('Receive a FREE Cesar Millan eBook on the 5 Essential Commands to Teach Your Dog for Completing Your FREE Quote Above.').should('be.visible')
    cy.get('input[name="petName"]').should('be.visible')
    cy.get('input[name="displayPetBreed"]').should('be.visible')
    cy.get('input[name="zipCode"]').should('be.visible')
    cy.get('input[name="fname"]').should('be.visible')
    cy.get('input[name="lname"]').should('be.visible')
    cy.get('input[name="emailAddress"]').should('be.visible')
    cy.get('input[name="petName"]').should('be.visible')
    cy.get('#amz-check').should('be.visible')

  })
})
  
  
describe('My Pet Enter', () => {
  it('Types into the input and presses submit', () => {
    cy.get('select[name="petAge"]').select(petAGE)
    cy.get('input[name="displayPetBreed"]').type(petSIZE)
    cy.get('.suggestions').click()
    cy.get('input[name="zipCode"]').type(zip)
    cy.get('input[name="fname"]').type(humanF)
    cy.get('input[name="lname"]').type(humanL)
    cy.get('input[name="emailAddress"]').type('test@test.com')
    cy.get('input[name="emailAddress"]').click(500,0, {force: true })
    cy.get('input[name="lname"]').click({force: true })
    //cy.get('submit-buttons').click({force: true })
    cy.get('[data-cy=reg-submit]').click({force: true })
    cy.wait(2000)
  })
})




describe('My Plan Check', () => {
  it('Checks the "My Plan" Page', () => {
    //Start
    //cy.url().should('contains', 'https://spotpetins.com/quote/policy');
    cy.get('#nav-info').should('be.visible')
    cy.get('#main-header').should('be.visible')
    cy.get('#main-footer').should('be.visible')

    // Visible
    cy.get('#nav-info').should('be.visible')
    cy.contains('Accident & Illness Coverage').should('be.visible')
    cy.contains('MOST AFFORDABLE').should('be.visible')
    cy.contains('MOST POPULAR').should('be.visible')
    cy.contains('MOST REIMBURSEMENT').should('be.visible')
    cy.contains('Customize').should('be.visible')
    cy.contains('Coverage').should('be.visible')
    cy.get('*[class^="slider-section"]').should('be.visible')
    cy.get('.not-covered').should('be.visible')
    cy.get('#plans').should('be.visible')
    cy.get('*[class^="plan"]').should('be.visible')
    cy.get('*[class^="plan selected"]').should('be.visible')
    cy.get('*[class^="plan preferred"]').should('be.visible')
    cy.get('.price').should('be.visible')
    cy.get('.slider-label').should('be.visible')
    cy.get('*[class^="container flex-parent text-left"]').should('be.visible')
    cy.get('#policy-buttons').should('be.visible')
    cy.get('*[class^="fl-col-content fl-node-content ui-sortable"]').should('be.visible')
    cy.get('#spot-claims-calc-app').should('be.visible')
  })
})


describe('My Plan Enter', () => {
  it('Chooses a plan and submits', () => {
    cy.contains('.slider-label', '$5K').click({force: true })
    cy.contains('.slider-label', '90%').click({force: true })
    cy.contains('.slider-label', '$500').click({force: true })
    cy.contains('Select').click({force: true })
    cy.contains('.btn', 'Checkout').click({force: true })
    cy.wait(2000)
  })
})




describe('Add New Pet', () => {
  it('Adds a 2nd pet', () => {
    cy.wait(2000)
    cy.contains('.btn', 'Add Another Pet').click({force: true})

    cy.get('#nav-info').should('be.visible')
    cy.get('#spot-header').should('be.visible')
    cy.get('input[name="petName"]').should('be.visible')
    cy.contains('Add New Pet').should('be.visible')
    cy.get('input[name="petName"]').type('Max')
    cy.contains('Add New Pet').click({force: true})

    cy.wait(2000)

    cy.get('#nav-info').should('be.visible')
    cy.get('#spot-header').should('be.visible')
    cy.get('*[class^="dog-vs-cat"]').should('exist')
    cy.get('select[name="petAge"]').should('be.visible')
    cy.get('#registration').click(600,80, {force: true})
    cy.get('select[name="petAge"]').select('6')
    cy.get('input[name="displayPetBreed"]').type('German Shepherd')
    cy.get('.suggestions').click()
    cy.contains('View Quote').click({force: true})
    cy.wait(2000)
    cy.contains('.btn', 'Checkout').click({force: true })
    cy.wait(2000)
  })
})




describe('Checkout Check', () => {
  it('Check the "Checkout" Page', () => {
    //Start
    cy.get('#main-header').should('be.visible')
    cy.get('#main-footer').should('be.visible')
    
    //Check
    cy.wait(4000)
    cy.get('*[class^="flex-parent border-bottom"]').should('be.visible')
    cy.get('*[class^="flex-parent"]').should('be.visible')
    cy.contains('.btn', 'Add Another Pet').should('be.visible')
    cy.contains('Add Preventive Care?').should('be.visible')
    cy.contains('When you add preventive coverage, you’ll be reimbursed up to the scheduled amount').should('be.visible')
    cy.contains('*[class^="btn blue"]', 'Learn More').should('be.visible')
    cy.contains('Phone Number').should('be.visible')
    cy.contains('Name on Card').should('be.visible')
    cy.contains('Card Information').should('be.visible')
    cy.contains('Card Expiration').should('be.visible')
    cy.contains('Billing Address').should('be.visible')
    cy.contains('Bank Account').should('be.visible')
    cy.contains('Credit / Debit Card').should('be.visible')
    cy.get('input[name="phone"]').should('be.visible')
    cy.get('input[name="cardNumber"]').should('be.visible')
    cy.get('[name="cardExpirationMonth"]').should('be.visible')
    cy.get('[name="cardExpirationYear"]').should('be.visible')
    cy.get('input[name="address"]').should('be.visible')
    cy.get('input[name="address_2"]').should('be.visible')
    cy.get('input[name="city"]').should('be.visible')
    cy.get('input[name="paperless"]').should('be.visible')
    cy.contains('Go Paperless').should('be.visible')
    cy.contains('Get your policy and communications online.').should('be.visible')
    cy.contains('Get Covered!').should('be.visible')
    cy.get('.checkout-container').should('be.visible')
    cy.get('input[name="termsConditions"]').should('be.visible')
    cy.contains('I have read and accept ').should('be.visible')
    cy.get('.link-style').contains('the policy terms and fraud notice').should('be.visible')
  })
})


describe('Checkout Enter', () => {
  it('Submits the "Checkout" Page', () => {
    cy.get('input[name="phone"]').type('561-000-0000')
    cy.get('input[name="cardNumber"]').type('341134113411347')
    cy.get(' [name="cardExpirationMonth"]').select('5 - May')
    cy.get('[name="cardExpirationYear"]').select('2024')
    cy.get('input[name="address"]').type('Test Road')
    cy.get('input[name="city"]').type('Test')
    cy.get('input[name="termsConditions"]').click({force: true })
    cy.contains('Get Covered!').click({force: true })
  })
})




describe('Checkout Check', () => {
  it('Check the "Checkout" Page', () => {
    //Start
    cy.get('#main-header').should('be.visible')
    cy.get('#main-footer').should('be.visible')
    cy.wait(2000)
    //cy.contains('Account Number : ').should('be.visible')
    cy.contains('Policy Start Date:').should('be.visible')
    cy.contains('Accident coverage starts: ').should('be.visible')

  })
})




Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})




//Exp Date: anything:
//Security code: anything
//Name: anything
//Staging:
//American Express: 341134113411347
//Discover: 6559906559906557
//Mastercard: 5112345112345114
//Visa: 4112344112344113
