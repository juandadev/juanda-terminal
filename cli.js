#!/usr/bin/env node

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

yargs(hideBin(process.argv))
  .command(
    "skills",
    "Shows Juan Daniel's programming skills",
    (yargs) => {
      return yargs;
    },
    (argv) => {
      console.log(
        "🐵 [Juanda's languages] 🐵 => HTML, CSS, Javascript, PHP, Java, MySQL"
      );
      console.log(
        "🐵 [Juanda's tools] 🐵 => Git, Reactjs, Nodejs, Nextjs, Redux, Bootstrap, Laravel\n"
      );
    }
  )
  .command(
    "jobs",
    "Shows Juan Daniel's jobs in tech industry",
    (yargs) => {
      return yargs;
    },
    (argv) => {
      console.log("🐵 [Juanda's experience] 🐵");
      console.log("+ FREELANCER");
      console.log("\t - Hidalgo del Parral, Chihuahua, México");
      console.log("\t - November 2019 - Present");
      console.log("\t - Design complex websites for many clients.\n");

      console.log("+ WEB DEVELOPER");
      console.log(
        "\t - At Instituto de Neurociencias Aplicadas al Desarrollo S.C"
      );
      console.log("\t - Hidalgo del Parral, Chihuahua, México");
      console.log("\t - October 2020 - February 2021 (5 months)");
      console.log(
        "\t - Design and development of websites for the courses the company offers to its customers. Process managment and automation.\n"
      );

      console.log("+ FULL STACK DEVELOPER");
      console.log("\t - At Fenixoft");
      console.log("\t - Hidalgo del Parral, Chihuahua, México");
      console.log("\t - March 2021 - Present");
      console.log(
        "\t - Development of custom software and multi-platform apps for our clients.\n"
      );
    }
  ).argv;
