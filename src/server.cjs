const { createRequire } = require("module");
const require = createRequire(import.meta.url);

const app = require("./dist/index.js"); // O donde esté tu app en dist

app.listen(3000, () => console.log("Server running"));
