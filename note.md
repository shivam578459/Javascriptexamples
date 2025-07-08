Cypress is asynchronous in nature but it would like it synchronous because our code runs one after another.
 cypress internally manages it through command queue

 cypress.visit("https://www.google.com) // step 1: queued
 cypress.get('.asvd').type()

 cypress does not run these command immediately

 1. It put each command in a queue
 2. The cypress internal runner starts processing the queue one at a time
 3. It waits for each command to finish before moving to the next 