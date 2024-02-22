const request = require("supertest"); // import supertest
const { expect } = require("chai"); // import chai
const baseUrl = require("../globalVariable/baseUrl");

const url = `${baseUrl}`; // define global variable

async function getMethod() {
  const response = await request(url).get("/objects/12");
  //assertation / verifikasi
  expect(response.status).to.equal(200);
}

async function postMethod() {
  const response = await request(url)
    .post("/objects")
    .send({
      name: "M Teguh Fatwa",
      data: {
        Generation: "2024th",
        Price: "10000",
        Capacity: "125 GB",
      },
    });
  //assertation / verifikasi
  expect(response.status).to.equal(200);
  const id = response.body.id;
  console.log("id after POST:", id);
}

async function deleteMethod(id) {
  const response = await request(url).delete("/objects/6");
  //assertation / verifikasi
  expect(response.body.message).to.equal("object with id = 6 has been deleted");
}
expect(response.body.error).to.equal("Object with id = 6 was not found.");
module.exports = { getMethod, postMethod, deleteMethod };
