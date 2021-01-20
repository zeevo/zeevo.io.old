const fs = require('fs');
const yargs = require('yargs');

function formatDate() {
  const d = new Date();
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

const options = yargs
  .usage('Usage: -n <name>')
  .option('r', { alias: 'routine', describe: 'routine', type: 'string', demandOption: true })
  .option('s', { alias: 'status', describe: 'status', type: 'string', demandOption: true })
  .option('m', { alias: 'message', describe: 'Your name', type: 'string', demandOption: false })
  .option('d', { alias: 'date', describe: 'Your name', type: 'string', demandOption: false }).argv;

const routineFile = `../content/routines/${options.routine}.json`;
/* eslint-disable-next-line */
const routine = require(routineFile);

const entry = {
  date: options.d,
  status: options.s,
};

if (!options.d) {
  entry.date = formatDate();
}

if (options.m) {
  entry.message = options.m;
}

routine.days.push(entry);

fs.writeFileSync(`${__dirname}/../content/routines/${options.r}.json`, JSON.stringify(routine));
