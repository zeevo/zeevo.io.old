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
  .option('h', { alias: 'habit', describe: 'habit', type: 'string', demandOption: true })
  .option('s', {
    alias: 'status',
    default: 'Done',
    describe: 'status',
    type: 'string',
  })
  .option('m', { alias: 'message', describe: 'Your name', type: 'string', demandOption: false })
  .option('d', { alias: 'date', describe: 'Your name', type: 'string', demandOption: false }).argv;

const routineFile = `../content/habits/${options.habit}.json`;
/* eslint-disable-next-line */
const habit = require(routineFile);

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

habit.days.push(entry);

fs.writeFileSync(`${__dirname}/../content/habits/${options.h}.json`, JSON.stringify(habit));
