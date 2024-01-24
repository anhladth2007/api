exports.name = '/images/avtsang';
exports.index = async(req, res, next) => {
    try {
        const avt = require('./data/json/anime.json');
        var image = avt[Math.floor(Math.random() * avt.length)].trim();
        res.jsonp({
            data: image
            url: image,
            count: girl.length,
            author: 'dthdev'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
