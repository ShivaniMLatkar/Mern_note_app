import rateLimit from"../config/upstash.js";
const rateLimiter = async (req, res, next) =>  {

    try {
        const {success} = await rateliimit.limit("my-rate-limit");

        if(!success) {
            returnres.status(429).json({
                message: "Too many requests, please try again later",
            });
        }
        next();
    }catch(error){
        console.log("Rate limit error", error);
        next(error);
    }
};

export default rateLimiter;