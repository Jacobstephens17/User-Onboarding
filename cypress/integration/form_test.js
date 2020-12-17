describe("User-Onboarding Tests", () => {
    beforeEach(() => {
        // arbitrary code you want running before tests start
        cy.visit("http://localhost:3000");
      });

      const userInput = () => cy.get('input[name="username"]');
      const emailInput = () => cy.get('input[name="email"]');
      const passwordInput = () => cy.get('input[name="password"]');

      it("sanity test to make sure tests work", () => {
        // false positive
        // 'expect' is an assertion
        // there can be many assertions per test
        // inside the 'it' statement (test) many assertions may be
        // logically grouped together
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5);
      });
    
      it("the proper elements are showing on the screeen", () => {
        userInput().should("exist");
        emailInput().should("exist");
        passwordInput().should("exist");
      });
    
      it("can type in the inputs", () => {
        // grab the inputs
        // assert they are empty
        // type in the inputs
        // assert that the thing we typed is there
        userInput()
          .should("have.value", "")
          .type("have fun learning React!")
          .should("have.value", "have fun learning React!");
        emailInput()
          .should("have.value", "")
          .type("am I doing this right?")
        passwordInput()
          .should("have.value", "")
          .type("am I doing this right?")
      });
    
    //   it("submit button disabled until both inputs filled out", () => {
    //     // set up, sanity checks to make sure initial state is legit
    //     // act (like typing or clicking - mimicking user input)
    //     // assert that the action has the effect we expect
    
    //     //submit quote is disabled.
    //     submitButton().should("be.disabled");
    //     // put text into text input
    //     textInput().type("TEXT INPUT");
    //     // the submit button still disabled.
    //     submitButton().should("be.disabled");
    //     // clear text input
    //     textInput().clear();
    //     // put text into author input
    //     authorInput().type("AUTHOR INPUT");
    //     // the submit button still disabled.
    //     submitButton().should("be.disabled");
    //     // both inputs are filled
    //     textInput().type("TEXT INPUT");
    //     // submit button is working.
    //     submitButton().should("not.be.disabled");
    
    //     // "be.disabled"
    //     // .clear()
    //   });
    
    //   it("can cancel a new quote", () => {
    //     // should('have.value', '') - input is empty
    //     // .click()
    
    //     textInput().type("test");
    //     authorInput().type("test");
    //     cancelButton().trigger("click");
    //     // cancelButton().click();
    //     (textInput() && authorInput()).should("have.value", "");
    //   });
    
    //   it("can submit a new quote", () => {
    //     // arrange/setup: that text is not in the DOM
    //     // act: create a quote 'have fun (Rhiannon)'
    //     // assert: that the have fun is in the DOM
    //     cy.contains("have fun (Rhiannon)").should("not.exist");
    //     userInput().type("have fun");
    //     emailInput().type("Rhiannon");
    //     passwordInput().type("lkafjd;alsdf")
    //     pass().click();
    //     cy.contains("have fun (Rhiannon)").should("exist");
    //   });

})  
