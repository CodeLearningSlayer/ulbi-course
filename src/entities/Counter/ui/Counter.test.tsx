import { screen, fireEvent } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/componentRender/componentRender";
import { Counter } from "./Counter";

describe("Sidebar", () => {
    test("Counter test", () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        expect(screen.getByTestId("value-title")).toHaveTextContent("10");
        screen.debug();
    });

    test("Counter increment", () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        fireEvent.click(screen.getByTestId("increment-btn"));
        expect(screen.getByTestId("value-title")).toHaveTextContent("11");
        screen.debug();
    });

    test("Counter increment", () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        fireEvent.click(screen.getByTestId("decrement-btn"));
        expect(screen.getByTestId("value-title")).toHaveTextContent("9");
        screen.debug();
    });
});
