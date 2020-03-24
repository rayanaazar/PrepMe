// Functions to help with user actions.

// A function to check if a user is logged in on the session cookie
export const readCookie = (app) => {
  const url = "/users/check-session";

  fetch(url)
      .then(res => {
          if (res.status === 200) {
              return res.json();
          }
      })
      .then(json => {
          if (json && json.currentUser) {
              app.setState({ currentUser: json.currentUser });
          }
      })
      .catch(error => {
          console.log(error);
      });
};

// A function to send a POST request with the user to be logged in
export const login = (loginComp, app) => {
  const { username, password } = loginComp.state

  const newUser = {
    username,
    password
  }

  console.log(newUser)
  console.log(JSON.stringify(newUser))

  // Create our request constructor with all the parameters we need
  const request = new Request("http://localhost:5000/users/login", {
      method: "post",
      body: JSON.stringify(newUser),
      headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
      }
  });

  // Send the request with fetch()
  fetch(request)
      .then(res => {
          if (res.status === 200) {
            loginComp.setState({ invalidCredentials: false })
            return res.json();
          }
      })
      .then(json => {
          if (json.username !== undefined) {
              app.setState({ currentUser: json.username });
          }
          if (json.isAdmin !== undefined) {
            app.setState({ isAdmin: json.isAdmin })
          }
      })
      .catch(error => {
          console.log(error);
          loginComp.setState({ invalidCredentials: true })
      });
};

// A function to send a POST request with the user to be created
export const signUp = (signUpComp, app) => {
  const { username, password } = signUpComp.state

  const newUser = {
    username,
    password
  }
  // Create our request constructor with all the parameters we need
  const request = new Request("http://localhost:5000/users", {
      method: "post",
      body: JSON.stringify(newUser),
      headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
      }
  });

  // Send the request with fetch()
  fetch(request)
      .then(res => {
          if (res.status === 200) {
            signUpComp.setState({ invalidCredentials: true })
            return res.json();
          }
      })
      .then(json => {
        // I don't think we need to do anything
          // if (json.currentUser !== undefined) {
          //     app.setState({ currentUser: json.currentUser });
          // }
      })
      .catch(error => {
          console.log(error);
          signUpComp.setState({ invalidCredentials: true })
      });
};


// A function to send a GET request to logout the current user
export const logout = (app) => {
  const url = "http://localhost:5000/users/logout"

  fetch(url)
      .then(res => {
          app.setState({
              currentUser: null,
          });
      })
      .catch(error => {
          console.log(error);
      });
};