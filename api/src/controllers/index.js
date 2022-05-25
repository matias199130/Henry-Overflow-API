const { Tag } = require('../db')

async function preLoad() {
    try {
        const allTags = 
        [
            'JavaScript',
            'CSS',
            'AJAX',
            'DOM',
            'Webpack',
            'React',
            'Redux',
            'NodeJS',
            'Express',
            'Testing',
            'SQL',
            'Sequelize'
        ]
        const promisesTags = allTags.map(elem => Tag.create({ name: elem }));
        await Promise.all(promisesTags)
    
    } catch (error) {
        console.log('La base de datos ya esta cargada!!')
    }
};

module.exports = {
    preLoad
  };
