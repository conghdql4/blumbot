const express = require('express');
const app = express();
const port = 3000;
const luncher = require("./bot/utils/luncher");

// Middleware để parse JSON
app.use(express.json());
// Định nghĩa route /payload
app.post('/payload', async (req, res) =>  {
    try {
        const { game_id} = req.body;
        let payload = await luncher.process(game_id)
        console.log(game_id + " : " + payload.pts);
        // Kiểm tra xem game_id và point có tồn tại không
        if (!game_id) {
            return res.status(400).json({ error: 'game_id phải là chuỗi và point phải là số' });
        }
        // Trả về kết quả
        res.json({ payload });
    } catch(error) {
        console.error("--------------ERROR--------------");
        res.status(500).json("fail");
    }
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});