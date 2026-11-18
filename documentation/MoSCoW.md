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

Browser speech to text- We could implement the free Web Speech API so users can use their voice to talk directly to the chatbot.

Source Citations- We could have information of where we got the information for the chatbot to talk about (that is a weird sentence) like did we get it from wikipedia or did we find it from a forum and so on.

Dynamic side panel- There could be a side panel that changes, either showing different photos of Gorbachev changing expressions, or we could show photos of what we are talking about, this could link in to having certain prompts that the chatbot will respond differently to. If we ask about the fall of the berlin wall we could change the panel to a photo of the berlin wall.

**W- won’t have**

User Authentication-  There is no need for user authentication if this is a LocalHost, if this was an actual website we would need it, but this is more like a demo making it unnecessary.

Public Rate Limiting and Security- since this won’t be public there is almost no need for any security, unless Ben has it out for us and decided to be evil.

Cloud deployment and scaling- this being local means we don’t need to think about making it accessible anywhere at all times through something like google cloud, we just need it to work locally, as for scaling, this is meant to only have one person at a time for now.