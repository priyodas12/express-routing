function isAuthenticated(req, res, next) {
    console.log(`[ Auth ] - requested at: ${new Date().toISOString()} ,method: ${req.method || "GET"} ,url: ${req.originalUrl}`);
    if (req.headers["authorization"]) {
        console.log("[ Auth ] - auth token: ", req.headers["authorization"]);
        // authentication code
    }
    next();
}

export default isAuthenticated;