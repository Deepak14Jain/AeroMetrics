import fs from 'fs';
import { Parser } from 'json2csv';
import chalk from 'chalk';

try{
  console.log(chalk.blue.bold('Running Script: commonTimeZones.js'));

  const data = JSON.parse(fs.readFileSync('airports.json', 'utf8'));
  const tzCount = {};
  data.forEach(({ timezone_code }) => {
    if (timezone_code) tzCount[timezone_code] = (tzCount[timezone_code] || 0) + 1;
  });

  const topTimezones = Object.entries(tzCount)
    .map(([timezone, count]) => ({ timezone, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  const targetDir = 'target';
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }

  const csv = new Parser({ fields: ['timezone', 'count'] }).parse(topTimezones);
  fs.writeFileSync(`${targetDir}/most_common_timezones.csv`, csv);
  console.log(chalk.green(`Generated: ${targetDir}/most_common_timezones.csv`));
  console.log(chalk.cyan(`Top 10 time zones:`));
  console.table(topTimezones);
} catch (error) {
  console.error(chalk.red('Error:'), error.message);
}