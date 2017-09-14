class Auth {
  static authenticateToken(toke) {
    sessionStorage.setItem('token', token);
  }

  static isUserAuthenticated() {
    return seesionStorage.getItem('token') !== null;
  }

  static deauthenticateUser() {
    return sessionStorage.getItem('token');
  }

  static getToken() {
    return sessionStorage.getItem('token');
  }

}

export default Auth;