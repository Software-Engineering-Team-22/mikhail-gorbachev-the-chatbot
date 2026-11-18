**M- must have**

Authentic Conversational persona- A persona that encapsulates Mikhail Gorbachev, asking him things such as “what happened in Ukraine 1986?” or having something that could give us a look into his life while also giving us history and having some personality. We don’t want a textbook with the face of a historical figure.

Historical Grounding- The facts and responses that the chatbot produces need to be accurate and truthful, the only exception could be if we are doing a bit or a joke, expanding on what happened in ukraine we can have the chatbot respond with something like “I have no clue what you are talking about”. This is due to the fact that the Chernobyl reactor blew up and at first the soviet union tried to cover it up or make it seem like less of a problem.

Chat storage- The chatbot needs a way to store or remember the previous chats and discussions with a user, how we do this is up to discussion. We could make it a local storage that would store the chats on the users device, however this would mean that logging on with another device wouldn’t be possible. We can make the user have a login or a way to recover their chats.

Responsive UI- We need the UI to be responsive no matter the platform and have clear buttons and drop downs that can be used on mobile devices and desktops. It should also be fast, however to fit the conversational theme we are going for, it should have a little delay between answering.

**S- should have**

Conversation starters/ tips- The chatbot should have some prompts to showcase what it can say or what it can do, we can put some fun conversation starters like “discuss the fall of the Berlin wall”, just to prompt the user to ask more interesting questions than usual.

Scope and timeline- Gorbachev actually only died in 2022 so he was around until very recently, and would have probably heard of things such as memes and skibidi toilet. Since he is both a historical figure as well as being very recently deceased we should show this in some manner.

Interactive Follow-ups- I debated putting this in could have but I feel like this is better to spread out a little. We should have a prompt so that people can have something more to ask after talking to the chatbot, maybe they are struggling to think what to ask and could use some help/

   
**C- could have**

*side note: Should consider accessibility requirements as well* ->

Browser speech to text- We could implement the free Web Speech API so users can use their voice to talk directly to the chatbot. (**very good point. Should be included in the functional requirements.**)

Source Citations- We could have information of where we got the information for the chatbot to talk about (that is a weird sentence) like did we get it from wikipedia or did we find it from a forum and so on. (**very good point. Should be included in the functional requirements.**) The system shall provide the source or sources supporting its response when requested by the user.

Dynamic side panel- There could be a side panel that changes, either showing different photos of Gorbachev changing expressions, or we could show photos of what we are talking about, this could link in to having certain prompts that the chatbot will respond differently to. If we ask about the fall of the berlin wall we could change the panel to a photo of the berlin wall. (**very good point. Should be included in the functional requirements.**) -> 
Functional: The system shall occasionally provide pictures relevant to the event or topic being discussed during a conversation. 
Functional: The system shall provide a picture relevant to the user's request when the user explicitly requests one.
Functional: The system shall provide the model with a list of available historical pictures that can be retrieved and sent to the user upon request.


* The system shall display an informative error message when an operation fails, explaining the nature of the error where possible.

* The system shall allow users to select and delete one or more conversations from their conversation history.

* The system shall allow users to continue previous conversations from the conversation history.
  
* The system shall record and store the history of conversations between the user's account and the chatbot.

* The system shall allow users to switch between light mode and dark mode.

* NFK: The system shall maintain an uptime of at least 99% during scheduled operating hours.
* NFK: The system shall successfully process at least 99% of API requests made through the backend under normal operating conditions.
* NFK: The chatbot shall provide historically accurate and consistent responses based on its approved knowledge sources.
* NFK: The system shall provide clear and understandable error messages when something goes wrong.
* NFK: The system shall provide a mechanism for deleting stored conversation data where applicable.
* NFK: The system shall encrypt data during transmission and storage to provide a basic level of security.
* NFK: The system shall limit the size of user inputs to prevent excessive resource consumption.
* NFK: The system shall temporarily restrict requests from users who exceed predefined usage limits.
**Thats a tricky one: The system shall obtain user consent before using non-essential cookies where legally required.**
**W- won’t have**

(User Authentication-  There is no need for user authentication if this is a LocalHost, if this was an actual website we would need it, but this is more like a demo making it unnecessary.)->

* FK: The system shall allow the user to login using their email address and password.

* FK: The system shall allow the user to create a new profile using their email address and (password.


Public Rate Limiting and Security- since this won’t be public there is almost no need for any security, unless Ben has it out for us and decided to be evil.) That's funny. I doubt he would do something like that but he pretty every answers he gives seems to lead in the same direction "Ask yourself if you need it"-> 
* FK: The system shall allow the user to reset their password through the log in interface.

Cloud deployment and scaling- this being local means we don’t need to think about making it accessible anywhere at all times through something like google cloud, we just need it to work locally, as for scaling, this is meant to only have one person at a time for now. I feel like these words are very ambiguous "scaling" and "cloud deployment". Could be worth investigating.
* NFK: The system shall notify users when the chatbot is temporarily unavailable due to maintenance or unexpected failures.
* NFK: The system shall maintain an availability of at least 99% over each 7-day period.
* NFK: During any unscheduled maintenance hours the system shall go back online within 12 hours.
* NFK: The system shall require authorised maintenance personnel to complete two-factor authentication before granting access to administrative functionality.
* NFK: The system shall validate user input to prevent malicious code or scripts from being executed.
* NFK: The system shall implement protection against common web application vulnerabilities.
* NFK: The system shall restrict modifications to the chatbot's knowledge base to authorised personnel.
* NFK: The system shall ensure that software dependencies and components are regularly updated to address known security vulnerabilities.
