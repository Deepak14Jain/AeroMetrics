import fs from 'fs';
import { Parser } from 'json2csv';
import chalk from 'chalk';

try {
  console.log(chalk.blue.bold('Running Script: averageElevation.js'));

  const data = JSON.parse(fs.readFileSync('airports.json', 'utf8'));
  const elevationByCountry = {};

  data.forEach(({ country_code, elevation }) => {
    const elev = parseFloat(elevation);
    if (country_code && !isNaN(elev)) {
      if (!elevationByCountry[country_code]) {
        elevationByCountry[country_code] = { sum: 0, count: 0 };
      }
      elevationByCountry[country_code].sum += elev;
      elevationByCountry[country_code].count += 1;
    }
  });

  const results = Object.entries(elevationByCountry)
    .map(([country_code, { sum, count }]) => ({
      country_code,
      average_elevation: +(sum / count).toFixed(2),
    }))
    .sort((a, b) => b.average_elevation - a.average_elevation);

  const targetDir = 'target';
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir);
  }

  const csv = new Parser({ fields: ['country_code', 'average_elevation'] }).parse(results);
  fs.writeFileSync(`${targetDir}/average_elevation_per_country.csv`, csv);

  console.log(chalk.green(`Generated: ${targetDir}/average_elevation_per_country.csv`));
  console.log(chalk.cyan('Average elevation per country:'));
  console.table(results);
} catch (error) {
  console.error(chalk.red('Error:'), error.message);
}