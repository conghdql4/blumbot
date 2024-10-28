const Queue = require('bull');
const luncher = require("./bot/utils/luncher");

// Tạo hàng đợi mới
const payloadQueue = new Queue('payloadQueue');

// Xử lý job trong hàng đợi
payloadQueue.process(async (job) => {
    const { game_id } = job.data;
    try {
        console.log('aaaa')
        let payload = await luncher.process(game_id);
        return { payload };
    } catch (error) {
        console.error(`Lỗi khi xử lý game_id ${game_id}:`, error);
        throw error; // Để báo lỗi cho hàng đợi
    }
});

// Phương thức để lấy số lượng job còn lại
payloadQueue.getJobCounts().then((counts) => {
    console.log(`Số lượng job còn lại: ${counts.waiting}`);
});

module.exports = payloadQueue;