const { readSymbolValue, writeSymbolValue } = require("../modules/ads");

// specify the address of the TwinCAT HMI server
fixture`Getting Started with ADS`.page`http://127.0.0.1:3000/bin/`;

test("Click button should set myBool true", async (test) => {
  // click the button with ID "TcHmiButton_1"
  await test.click("#TcHmiButton_1").wait(1000);

  // read the value of the symbol "Main.myBool" from the TwinCAT server
  let value = await readSymbolValue("127.0.0.1.1.1", 851, "Main.myBool");

  // check that the value is equal to "true"
  await test.expect(value).eql(true);

  // write the value "false" to the symbol "Main.myBool" on the TwinCAT server
  await writeSymbolValue("127.0.0.1.1.1", 851, "Main.myBool", false);
});
