let BITBOXCli = require('bitbox-cli/lib/bitboxcli').default;
let BITBOX = new BITBOXCli({
  protocol: 'http',
  host: '127.0.0.1',
  port: 8332,
  username: '',
  password: ''
});

BITBOX.Control.getInfo()
.then((result) => {
  console.log(result);
}, (err) => { console.log(err);
});
