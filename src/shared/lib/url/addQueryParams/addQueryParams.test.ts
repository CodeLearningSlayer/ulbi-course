import { getQueryParams } from "./addQueryParams";

describe("shared/url/addQueryParams", function () {
    test("test with one param", () => {
        const params = getQueryParams({
            test: "value",
        });
        expect(params).toEqual("?test=value");
    });

    test("test with two param", () => {
        const params = getQueryParams({
            test: "value",
            testTwo: "valueTwo",
        });
        expect(params).toEqual("?test=value&testTwo=valueTwo");
    });
    test("test with one param", () => {
        const params = getQueryParams({
            test: "value",
            testTwo: "valueTwo",
            testThree: undefined,
        });
        expect(params).toEqual("?test=value&testTwo=valueTwo");
    });
});
