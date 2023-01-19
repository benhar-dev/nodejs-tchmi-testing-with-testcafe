import { Selector } from "testcafe";

// specify the address of the TwinCAT HMI server
fixture`Getting Started with selectors`.page`http://127.0.0.1:3000/bin/`;

test("Click button should set label", async (test) => {
  // click the button with ID "TcHmiButton"
  await test
    .click("#TcHmiButton")

    // check that the inner text of the element with ID "TcHmiTextblock" is equal to "Button pressed!"
    .expect(Selector("#TcHmiTextblock").innerText)
    .eql("Button pressed!");
});
