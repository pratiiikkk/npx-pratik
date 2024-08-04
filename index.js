#!/usr/bin/env node
import { createSpinner } from "nanospinner";
import colors from "colors";

function displaySkills(skills, header) {
  const skillColors = ["blue", "red", "yellow", "magenta"];

  let skillArr = [];

  skills.forEach((skill, index) => {
    const color = skillColors[Math.floor(Math.random() * skillColors.length)];
    skillArr.push(colors[color](skill));
  });
  console.log(colors.green(header), "-", skillArr.join(", "));
}
async function main() {
  console.log(
    `
(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧
            
            
        
 ██╗░░██╗██╗  ████████╗██╗░░██╗███████╗██████╗░███████╗ ██╗██╗
 ██║░░██║██║  ╚══██╔══╝██║░░██║██╔════╝██╔══██╗██╔════╝ ██║██║
 ███████║██║  ░░░██║░░░███████║█████╗░░██████╔╝█████╗░░ ██║██║
 ██╔══██║██║  ░░░██║░░░██╔══██║██╔══╝░░██╔══██╗██╔══╝░░ ╚═╝╚═╝
 ██║░░██║██║  ░░░██║░░░██║░░██║███████╗██║░░██║███████╗ ██╗██╗
 ╚═╝░░╚═╝╚═╝  ░░░╚═╝░░░╚═╝░░╚═╝╚══════╝╚═╝░░╚═╝╚══════╝ ╚═╝╚═╝`.magenta
  );
  console.log();
  const spinner = createSpinner("Loading pratik's details").start();

  async function spinnerStart() {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  }

  await spinnerStart();

  spinner.success();

  console.log();

  console.log(
    `
 █▀█ █▀▀ █▀█ █▀ █▀█ █▄░█ ▄▀█ █░░   █▀▄ █▀▀ ▀█▀ ▄▀█ █ █░░ █▀
 █▀▀ ██▄ █▀▄ ▄█ █▄█ █░▀█ █▀█ █▄▄   █▄▀ ██▄ ░█░ █▀█ █ █▄▄ ▄█
    `.yellow
  )
  console.log();
  const githubLink = "https://github.com/pratiiikkk";
  const websiteLInk = "https://neexzz.me";

  console.log(`NAME    `.green + " - " + "Pratik".cyan);
  console.log(`STATUS  `.green + " - " + "Student".cyan);
  console.log(`GITHUB  `.green + " - " + `${githubLink}`.cyan);
  console.log(`WEBSITE `.green + " - " + `${websiteLInk}`.cyan);

  console.log();

  console.log(
    `

 █▀ █▄▀ █ █░░ █░░ █▀
 ▄█ █░█ █ █▄▄ █▄▄ ▄█`.yellow
  );

  console.log();

  displaySkills([ "C", "TypeScript", "JavaScript"],"LANGUAGES   ");
  displaySkills(["React", "NextJs",], "FRAMEWORKS  ");
  displaySkills(["Express", "Nodejs", "Prisma"],"TECHNOLOGIES");
  displaySkills(["MongoDb", "PostgresSQL", "SQL"], "DATABASES   ");
  displaySkills(["GIT", "Github"], "Tools       ");

  console.log();

  console.log(
    `

 █▀▄▀█ █▀▀ █▀ █▀ ▄▀█ █▀▀ █▀▀
 █░▀░█ ██▄ ▄█ ▄█ █▀█ █▄█ ██▄`.yellow
  );

  console.log();
  console.log(
    "pratik is up for hire, ready to help your company get to next heights and ofc Thanks for checking out my cli!"
      .magenta
  );
  console.log();
}

main();
