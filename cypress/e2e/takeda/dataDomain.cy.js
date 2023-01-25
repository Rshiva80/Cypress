describe("Production sites ", () => {
    it("Alunbrig HCP", () => {
      cy.visit("https://www.alunbrig.com/hcp/");
      cy.get('head script[src*="e8234caa-036f-430a-a6f9-77babd6fc2f4"]');
    });

it("Ninlaro HCP", () => {
  cy.visit("https://www.ninlarohcp.com/");
  cy.get('head script[src*="aab486e8-82cd-416c-83d4-d2495f46dddc"]');
});

it("Iclusig HCP", () => {
  cy.visit("https://www.iclusig.com/hcp/");
  cy.get('head script[src*="1426e26b-4a0c-4888-b7b0-bc52a18ae8ca"]');
});
});