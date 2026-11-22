
## **M- must have**
* NFK: The system shall comply with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018 when collecting, processing and storing personal data.

* NFK: The system shall only collect personal information necessary for the operation of the chatbot.

* NFK: The system shall obtain user consent before using non-essential cookies where legally required.

* NFK: The system shall comply with the applicable requirements of the European Union Artificial Intelligence Act (EU AI Act), Regulation (EU) 2024/1689.

* NFK: The system shall be accessible on any device used to interact with the it.
* NFK: The system shall be able to process and interpret standard ASCII characters and symbols within user inputs.

* FK: The system shall provide a conversational interface that allows users to interact with the chatbot using natural language.
* FK: The system shall process the message entered into the chat input field when the user selects the Send button.
* FK: The system shall provide a dedicated chat window where users can enter messages and receive responses from the chatbot.
* FK: The system shall provide an interface that allows users to start a new conversation.

## **S- should have**
* FK: The system shall record and store the history of conversations between the user's account and the chatbot.
* FK : The system shall provide an elapsed time counter showing how long the chatbot has been generating a response.
* FK: The system shall provide a separate conversation history panel where users can view their previous conversations.
* FK: The system shall allow users to continue previous conversations from the conversation history.
* FK: The system shall allow users to select and delete one or more conversations from their conversation history.

* NFK: The system shall prevent unauthorised access to stored conversation histories.
* NFK: The chat interface shall load within 5 seconds of user's interaction.
* NFK: The system shall display a response to a user's message within 10 seconds under normal operating conditions.
* NFK: The system shall provide an intuitive and user-friendly interface that accommodates users with varying levels of technological experience.
* NFK: The system shall allow users to interact with the chatbot without requiring extensive technical knowledge.

* FK: The system may use predefined responses when discussing specific historical topics or areas of history.
* NFK: The system shall ensure that predefined responses are stored securely and are not directly exposed or transmitted within external API requests.
* FK: The system shall adopt a conversational personality and communication style that reflects the historical period and character of the historical figure being portrayed.


   

## **C- could have**
* FK: The system shall provide a debug mode that allows authorised developers to inspect system behaviour and identify errors.
* FK: The system shall display an informative error message when an operation fails, explaining the nature of the error where possible.
* NFK: The system shall provide a visible indication when the chatbot is processing a request.
* FK: The system shall occasionally provide pictures relevant to the event or topic being discussed during a conversation.
* FK: The system shall provide a picture relevant to the user's request when the user explicitly requests one.

* FK: The system shall provide the model with a list of available historical pictures that can be retrieved and sent to the user upon request.

* FK: The system shall allow users to switch between light mode and dark mode.

* NFK: The system shall maintain an uptime of at least 99% during scheduled operating hours.
* NFK: The system shall successfully process at least 99% of API requests made through the backend under normal operating conditions.
* NFK: The chatbot shall provide historically accurate and consistent responses based on its approved knowledge sources.
* NFK: The system shall provide clear and understandable error messages when something goes wrong.
  
* NFK: The system shall enforce HTTPS to encrypt communication between the frontend and backend.

* NFK: The system shall limit the size of user inputs to prevent excessive resource consumption.
* NFK: The system shall temporarily restrict requests from users who exceed predefined usage limits.
* NFK: The system shall notify users when the chatbot is temporarily unavailable due to maintenance or unexpected failures.
* NFK: The system shall be able to respond up to 50 users at a time without the degradation of performance.
* NFK: The system shall remain operational under load of processing 50 concurrent messages a second.
* FK: The system shall obtain explicit user consent before storing or accessing non-essential cookies where legally required.


## **W- won’t have**

* NFK: The system shall ensure that software dependencies and components are regularly updated to address known security vulnerabilities.

* FK: The system shall allow the user to login using their email address and password.

* FK: The system shall allow the user to create a new profile using their email address and password.

* FK: The system shall allow the user to reset their password through the log in interface.
* NFK: The system shall maintain an availability of at least 99% over each 7-day period.
* NFK: During any unscheduled maintenance hours the system shall go back online within 12 hours.
* NFK: The system shall require authorised maintenance personnel to complete two-factor authentication before granting access to administrative functionality.
* NFK: The system shall validate user input to prevent malicious code or scripts from being executed.
* NFK: The system shall implement protection against common web application vulnerabilities.
* NFK: The system shall restrict modifications to the chatbot's knowledge base to authorised personnel.
