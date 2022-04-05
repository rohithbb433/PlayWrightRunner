import { test, expect } from "@playwright/test";

let _id: any;

test("Get_API_Validation_Post", async ({ request }) => {
    const _response = await request.post("https://reqres.in/api/users", {
        data: {
            "name": "Rohith",
            "job": "Automation_Testing"
        }
    });
    console.log(await _response.json());
    console.log(await _response.status().toString());
    _id = await _response.json()
    console.log(await _id.id.toString());
})

test("Get_API_Validation_get", async ({ request }) => {
    const _response = await request.get(`https://reqres.in/api/unknown`);
    console.log(await _response.json());
    //console.log((await _response.body()).toJSON());
    console.log(await _response.status().toString());
})

test("Get_API_Validation_PUT", async ({ request }) => {
    const _response = await request.put(`https://reqres.in/api/users/2`, {
        data: {
            "name": "Rohith",
            "job": "Automation_Testing"
        }
    });
    console.log(await _response.json());
    //console.log((await _response.body()).toJSON());
    console.log(await _response.status().toString());
})

test("Get_API_Validation_Delete", async ({ request }) => {
    const _response = await request.delete(`https://reqres.in/api/users/2`);
    console.log(typeof (_response));
    // console.log(await _response);
    // if (_response !== null || _response !== undefined) {
    //     console.log(await _response?.json());
    //     //console.log((await _response.body()).toJSON());
    //     console.log(await _response?.status().toString());
    // }
})