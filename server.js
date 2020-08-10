const rExpress = require('express');
const oApp = rExpress();
oApp.use(rExpress.json());
oApp.get('/', (req, res) => res.send('Hello World'));
const intPort = process.env.PORT || 8080;
oApp.listen(intPort, () => {
  console.log(`Server is Runing on port : ${intPort}`)
});
module.exports = oApp;
