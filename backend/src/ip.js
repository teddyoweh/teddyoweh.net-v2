const os = require('os');

function getLocalIP() {
  const interfaces = os.networkInterfaces();
  let ipAddress = '';

  for (const networkInterface of Object.values(interfaces)) {
    for (const iface of networkInterface) {
      if (iface.family === 'IPv4' && !iface.internal) {
        ipAddress = iface.address;
        break;
      }
    }
  }

  return ipAddress;
}