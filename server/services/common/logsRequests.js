function requestLog(req){
    const now = new Date();
    const year = now.getFullYear();
    const time = now.toLocaleTimeString(); // Format time as HH:MM:SS

    // Log the request type along with the year and time
    console.log(`[${time} ${year}]: ${req.method} ${req.originalUrl}`);
}

export {requestLog}