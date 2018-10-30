var friends = require("../data/friends.js")
var $ = require("jquery");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends)
    });

    app.post("/api/friends", function (req, res) {
        var newScores = req.body.scores;
        var savedScores = [];
        var differenceArr = [];
        for (var i = 0; i < friends.length; i++) {
            savedScores.push(friends[i].scores);
        };
        for (var x = 0; x<savedScores.length; x++){
            var thisScore = savedScores[x]
            var difference = 0;
            for (var j = 0; j < 10; j++) {
                if (thisScore[j] !== parseInt(newScores[j])) {
                    difference += Math.abs(thisScore[j] - parseInt(newScores[j]));
                };
            };
            differenceArr.push(difference);
        };
        var max = Math.max(...differenceArr);
        var bestMatch = differenceArr.indexOf(max);
        var bestFriend = friends[bestMatch];
        friends.push(req.body);
        res.json(bestFriend);
    });
}
