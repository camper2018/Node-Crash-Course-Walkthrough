const os = require('os');

// Platform
console.log(os.platform()); // Darwin = MacOs, Win32 = windows
// CPU Architecture
console.log(os.arch());
// CPU Core Info
console.log(os.cpus());
// Free memory
console.log(os.freemem());
// Total memory 
console.log(os.totalmem());
// Home dir
console.log(os.homedir());
// Uptime
console.log(os.uptime());