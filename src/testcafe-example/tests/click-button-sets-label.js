import { Selector } from "testcafe";

fixture`Getting Started`.page`http://127.0.0.1:3000/bin/`; // specify your twincat hmi server address here

test("Click button should set label", async (test) => {
  await test
    .click("#TcHmiButton")
    .expect(Selector("#TcHmiTextblock").innerText)
    .eql("Button pressed!");
});
