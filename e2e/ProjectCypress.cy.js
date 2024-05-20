describe("amazon.co.uk socks test",function(){
    beforeEach(function(){
        cy.visit("https://www.amazon.co.uk/");
    });
    it("should add socks to the cart and assert they are in the cart",function(){
    //open amazon .co.uk
    cy.visit("https://www.amazon.co.uk/");
    //accept cookies if present
    cy.get('#a-autoid-0').click();
    //search for socks
    cy.get("input[type='text']").type("socks").type("{enter}")
    // Wait for the search results to load
    cy.wait(3000)
      //To click first sock item
    cy.get('[data-component-type="s-search-result"] [data-component-type="s-product-image"]').first().click();
    cy.wait(2000);

    //add the first available socks to the cart
    cy.get("#add-to-cart-button").click();

    //wait for the cart to update 
    cy.wait(3000);
    //assert that socks are in the cart
    cy.get("#nav-cart-count").should('have.text','1');
    })
    })
