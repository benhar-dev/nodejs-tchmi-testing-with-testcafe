const ads = require("ads-client");

async function readSymbolValue(targetAmsNetId, targetAdsPort, symbolName) {
  const client = new ads.Client({
    targetAmsNetId,
    targetAdsPort,
  });

  try {
    await client.connect();
    const res = await client.readSymbol(symbolName);
    await client.disconnect();
    return res.value;
  } catch (err) {
    console.log("Something failed:", err);
    return err;
  }
}

async function writeSymbolValue(
  targetAmsNetId,
  targetAdsPort,
  symbolName,
  value
) {
  const client = new ads.Client({
    targetAmsNetId,
    targetAdsPort,
  });

  try {
    await client.connect();
    const res = await client.writeSymbol(symbolName, value);
    await client.disconnect();
    return res.value;
  } catch (err) {
    console.log("Something failed:", err);
    return err;
  }
}

module.exports = { readSymbolValue, writeSymbolValue };
