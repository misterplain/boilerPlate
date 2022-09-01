import React from "react";

const HomeScreen = () => {
  return (
    <>
      <h1>HomeScreen</h1>
      <h2>Notes</h2>
      <h6>
        <ul>
          <li>Bootswatch min.css file in src, imported into index.js</li>
          <li>React Router v6 formatting in app.js</li>
          <li>
            Backend .env file
            <ul>
              <li>NODE_ENV = development</li>
              <li>PORT = 5000</li>
              <li>
                MONGO_URI = uri, change password, before the ? include project
                name
              </li>
              <li>JWT_SECRET = create jwt secret</li>
            </ul>
          </li>
          <li>
            seeder.js used to import/delete all data for testing, see
            package.json for syntax
          </li>
          <li>
            devDependancies, nodemon used to autorestart server on change,
            concurrently used to run frontend/backend
          </li>
          <li>
            Backend package.json - "type": "module", for es6 import/export
          </li>
          <li>Make sure backend package.json has proxy so that front end is pulling from backend port - "proxy": "http://127.0.0.1:5000"</li>
        </ul>
      </h6>
    </>
  );
};

export default HomeScreen;
