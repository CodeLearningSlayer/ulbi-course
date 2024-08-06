import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/lib/tests/renderWithRouter/renderWithRouter";
import { renderWithTranslation } from "shared/lib/tests/renderWithTranslation";
import { Sidebar } from "widgets/Sidebar";

describe("Sidebar", () => {
    test("Test render", () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("Sidebar collapse test", () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
        screen.debug();
    });
});
