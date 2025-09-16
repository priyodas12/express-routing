function logRequest(req, res, next) {
    console.log(`[ Log ] - requested at: ${new Date().toISOString()}, method: ${req.method || "GET"} ,url: ${req.originalUrl}`);
    next();
}

export default logRequest;