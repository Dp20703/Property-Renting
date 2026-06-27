async function Session(req, res) {
    try {

        const userDatas = req.session.user;
        console.log("session userdata :",userDatas);
        
        if (!userDatas) { 
            console.log("No sesssion created!");
            
            return res.status(401).json({ success: false, message: "No sesssion created!" });
        } else {
            res.status(200)
                .json({ sessionData: userDatas, success: true, message: "got Successful" });
        }
    } catch (error) {
        console.log("Session error:",error);
        res.status(500).json({ error: error.message });
    }
}

module.exports = Session;