const { Tag, Module } = require("../db");
const { Op } = require("sequelize");

async function preLoad() {
  try {
    const allTags = [
      "JavaScript",
      "CSS",
      "AJAX",
      "DOM",
      "Webpack",
      "React",
      "Redux",
      "NodeJS",
      "Express",
      "Testing",
      "SQL",
      "Sequelize",
    ];
    const promisesTags = allTags.map((elem) => Tag.create({ name: elem }));
    await Promise.all(promisesTags);

    const allModules = ["M1", "M2", "M3", "M4"];
    const promisesModules = allModules.map((elem) => Module.create({ name: elem }));
    await Promise.all(promisesModules);

    relationsModulesTags();
  } catch (error) {
    console.log("La base de datos ya esta cargada!!");
  }
}

async function relationsModulesTags() {
  const moduleOne = await Module.findAll({ where: { name: "M1" } });
  const moduleTwo = await Module.findAll({ where: { name: "M2" } });
  const moduleThree = await Module.findAll({ where: { name: "M3" } });
  const moduleFour = await Module.findAll({ where: { name: "M4" } });

  const tagsM1 = await Tag.findAll({
    where: {
        [Op.or]: [
            { name: "JavaScript" }, 
            { name: "Webpack" }
        ], 
    },
  });
  const tagsM2 = await Tag.findAll({
    where: {
        [Op.or]: [
            { name: "AJAX" },
            { name: "CSS" },
            { name: "DOM" },
            { name: "React" },
            { name: "Redux" },
        ],
    },
  });
  const tagsM3 = await Tag.findAll({
    where: {
        [Op.or]: [
            { name: "NodeJS" }, 
            { name: "Express" }, 
            { name: "Testing" }
        ],
    },
  });
  const tagsM4 = await Tag.findAll({
    where: {
        [Op.or]: [
            { name: "SQL" }, 
            { name: "Sequelize" }, 
            { name: "PostgreSQL" }
        ],
    },
  });
  
  moduleOne[0].addTag(tagsM1);
  moduleTwo[0].addTag(tagsM2);
  moduleThree[0].addTag(tagsM3);
  moduleFour[0].addTag(tagsM4);
}

module.exports = {
  preLoad,
};
