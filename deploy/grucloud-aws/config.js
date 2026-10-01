const pkg = require("./package.json");

module.exports = () => ({
  domainName: "yourdomain.com",
  keyPairName: "grucloud-app",
  projectName: pkg.name,
  availabilityZoneSuffix: "b",
});
