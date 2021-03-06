const liquibase = require("./index");

const config = {
  url: "jdbc:h2:mem:liquibase_test",
  contexts: 'TEST',
  labels: 'staging,Jira-1200',
  logLevel: 'info',
  // overwriteOutputFile: 'true',
  // logFile: 'test.log'
};

liquibase(config)
  .run('status', '--verbose')
  .then(() => console.log('success'))
  .catch((err) => console.error('fail', err));

liquibase(config)
  .run('updateSQL')
  .then(() => console.log('success'))
  .catch((err) => console.error('fail', err));

liquibase(config)
  .run('update')
  .then(() => console.log('success'))
  .catch((err) => console.error('fail', err));
