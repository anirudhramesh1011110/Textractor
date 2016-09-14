# Textractor
Uses Alyien's API to extract entities from text or from URL.

# Config
1. Alyien API key and ID.
2. MongoDB URI

# Starting App
Run npm install & npm start

# Client-Side Description  
- Client side uses React.
- /client/views/index.html is rendered by server, which loads react components.
- User can extract from URL or text and results are shown in box.
- User can search their previous results for entities (1 word only).
- Uses Browserify.

# Server-side Description
- Server-side framework is Hapi.
- Routes are split into separate files.

# Back-End Description
- Data is stored in MongoDB.
- User schema and extract schema.
- Each extraction has a foreign key/reference to user who made search.

# Testing
- I have only done manual testing and have yet to add Jasmine test cases.

# TODO
- Login is only partially completed so user is hardcoded, for now.
