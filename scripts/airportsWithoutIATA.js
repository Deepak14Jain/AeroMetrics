import fs from 'fs';
import { Parser } from 'json2csv';
import chalk from 'chalk';

try{
    console.log(chalk.blue.bold('Running Script: airportsWithoutIata.js'));

    const data = JSON.parse(fs.readFileSync('airports.json', 'utf8'));
    const noIata = data.filter(a => a.iataCode === null).map(({ iataCode, ...rest }) => rest);

    if (noIata.length === 0) {
        console.log(chalk.red('No airports with null IATA codes found.'));
    } else {
        const targetDir = 'target';
        if (!fs.existsSync(targetDir)) {
            fs.mkdirSync(targetDir);
        }
        const csv = new Parser().parse(noIata);
        fs.writeFileSync(`${targetDir}/airports_without_iata.csv`, csv);

        console.log(chalk.green(`Generated: ${targetDir}/airports_without_iata.csv`));
        console.log(chalk.cyan(`Found ${noIata.length} airports without IATA codes.`));
    }
} catch (error) {
    console.error(chalk.red('Error:'), error.message);
}