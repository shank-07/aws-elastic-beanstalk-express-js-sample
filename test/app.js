var expect  = require("chai").expect;
var request = require("request");

describe("test", function() {

    describe("test1", function() {

        const localhostUrl = "http://localhost:8080/hello";

        it("should return status code 200 ", function(done){
            request(localhostUrl, function(error, response, body ) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

    });
});