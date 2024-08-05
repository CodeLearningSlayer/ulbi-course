import { classNames } from "shared/lib/classNames/classNames";

describe("classNames", () => {
    test("with only first param", () => {
        expect(classNames("someClass")).toBe("someClass");
    });

    test("with additional class", () => {
        expect(classNames("someClass", {}, ["class1", "class2"])).toBe(
            "someClass class1 class2",
        );
    });

    test("with mods", () => {
        expect(
            classNames("someClass", { hovered: true, scrollable: true }, [
                "class1",
                "class2",
            ]),
        ).toBe("someClass class1 class2 hovered scrollable");
    });

    test("with one mode false", () => {
        expect(
            classNames("someClass", { hovered: true, scrollable: false }, [
                "class1",
                "class2",
            ]),
        ).toBe("someClass class1 class2 hovered");
    });
});
