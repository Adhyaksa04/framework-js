const fs = require("fs").promises;

async function manipulateJsonFile() {
  try {
    const data = await fs.readFile("./data.json", "utf-8");
    console.log(`Soal 1: ${data}`);

    const jsonData = JSON.parse(data);
    console.log(`Soal 2:`, jsonData);

    jsonData.newProperty = "New Value";
    console.log(`Soal 3:`, jsonData);

    const updatedData = JSON.stringify(jsonData, null, 2);

    await fs.writeFile("./data.json", updatedData, "utf-8");

    console.log("File berhasil dimanipulasi dan disimpan kembali.");
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
  }
}

manipulateJsonFile();
