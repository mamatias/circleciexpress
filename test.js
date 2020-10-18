const assert = require("assert");
const httpMocks = require("node-mocks-http");

const exampleRouteHandler = require("./example-router");
const dateRouteHandler = require("./date-router");

describe("Example Test 1", () => {
  it("should return 'Goodbye Earthling!' for GET /example", () => {
    const mockRequest = httpMocks.createRequest({
      method: "GET",
      url: "/example"
    });
    const mockResponse = httpMocks.createResponse();
    exampleRouteHandler(mockRequest, mockResponse);
    const actualResponseBody = mockResponse._getData();
    const expectedResponseBody = "Goodbye Earthling!";
    assert(actualResponseBody, expectedResponseBody);
  });
});

describe("Example Test 2", () => {
  it("should return UNIX timestamp for GET /date", () => {
    const mockRequest = httpMocks.createRequest({
      method: "GET",
      url: "/date"
    });
    const mockResponse = httpMocks.createResponse();
    dateRouteHandler(mockRequest, mockResponse);
    const actualResponseBody = mockResponse._getData();
    var d = Math.floor(+new Date() / 1000);
    const expectedResponseBody = "Unix TS: "+d;
    assert(actualResponseBody, expectedResponseBody);
  });
});