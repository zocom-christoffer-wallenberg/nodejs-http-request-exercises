# Övningar med HTTP requests

## Instruktioner

Fortsätt på din webbserver som du gjorde i föregående uppgift. I denna uppgift ska du skapa upp ett API som en klient ska kunna anropa. Ditt API ska i sin tur anropa ett annat API på [denna URL](http://shakespeare-insults-generator.herokuapp.com). Detta API har en endpoint **/getALL** som returnerar en array med 10 objekt och i varje objekt finns det två egenskaper **insult** och **play**.

Ditt API ska ha tre endpoints som ska kunna anropas från en klient med JavaScript.

**/getInsult**             - Returnera en slumpvis förolämpning. Ex. http://localhost:8000/api/getInsult

**/getAll**                - Returnera alla förolämpningar och pjäser. Ex. http://localhost:8000/api/getAll

**/search?play=SÖKORD**    - Returnera alla förolämpningar från den sökta pjäsen. Ska även returnera om det inte finns något förolämpningar med den pjäsen. http://localhost:8000/api/search?play=Macbeth