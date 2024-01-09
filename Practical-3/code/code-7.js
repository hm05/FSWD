const operatingSystem = require('os');

function showSystemInfo() {
  console.log('Processor Architecture:', operatingSystem.arch());
  console.log('Total RAM:', `${(operatingSystem.totalmem() / (1024 ** 3)).toFixed(2)} GB`);
  console.log('OS Platform:', operatingSystem.platform());
  console.log('System Uptime:', `${(operatingSystem.uptime() / 60).toFixed(2)} minutes`);
}

function monitorResources(intervalInSeconds) {
  setInterval(() => {
    const cpuUsage = operatingSystem.cpus().map(cpu => cpu.times.user).reduce((acc, curr) => acc + curr) / operatingSystem.cpus().length;
    const availableMemory = operatingSystem.freemem() / (1024 ** 3);
    console.log(`CPU Usage: ${cpuUsage.toFixed(2)}%`);
    console.log(`Available Memory: ${availableMemory.toFixed(2)} GB`);
    console.log('----------------------');
  }, intervalInSeconds * 1000);
}

showSystemInfo();
monitorResources(5);