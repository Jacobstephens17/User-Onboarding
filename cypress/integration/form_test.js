describe("User-Onboarding Tests", () => {
    beforeEach(() => {
        // arbitrary code you want running before tests start
        cy.visit("http://localhost:3000");
      });

      const userInput = () => cy.get('input[name="username"]');
      const emailInput = () => cy.get('input[name="email"]');
      const passwordInput = () => cy.get('input[name="password"]');
      const tosButton = () => cy.get('#tos');
      const submitButton = () => cy.get('#submitButton');

    //   it("sanity test to make sure tests work", () => {
    //     // false positive
    //     // 'expect' is an assertion
    //     // there can be many assertions per test
    //     // inside the 'it' statement (test) many assertions may be
    //     // logically grouped together
    //     expect(1 + 2).to.equal(3);
    //     expect(2 + 2).not.to.equal(5);
    //   });
    
    //   it("the proper elements are showing on the screeen", () => {
    //     userInput().should("exist");
    //     emailInput().should("exist");
    //     passwordInput().should("exist");
    //   });
    
    //   it("can type in the inputs", () => {
    //     userInput()
    //       .should("have.value", "")
    //     //   .type("Jacob Stephens")
    //     emailInput()
    //       .should("have.value", "")
    //     //   .type("jacobstephens.work@gmail.com")
    //     passwordInput()
    //       .should("have.value", "")
    //     //   .type("ljfkldlsafk")
    //   });

    //   it("should click tos", () =>{
    //     tosButton()
    //         .click()
    //         .should("have.value", "clicked")
    //   })

      it("submit button disabled until both inputs filled out", () => {
        submitButton().should("be.disabled");
        userInput().type("Jacob Stephens");
        userInput().should("have.value","Jacob Stephens")
        submitButton().should("be.disabled");
        emailInput().type("jacobstephens.work@gmail.com");
        submitButton().should("be.disabled");
        passwordInput().type("Tljfkldlsafk");
        submitButton().should("not.be.disabled");
        tosButton().click()
        submitButton().click()
      });
      
})  
