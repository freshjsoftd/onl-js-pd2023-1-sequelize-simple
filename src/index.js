const db = require('./db/models');
// const { Op } = require('sequelize');

(async function () {
  const {Sequelize: {Op}} = db;
	const authors = [
		{
			full_name: 'Ernest Hemingway',
			email: 'e-h.gmail.com',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		{
			full_name: 'Edgar Allan Poe',
			email: 'e-a-p.gmail.com',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
		{
			full_name: 'Stephen King',
			email: 's-k.gmail.com',
			createdAt: new Date(),
			updatedAt: new Date(),
		},
	];
	// Create
	/* const createdGenre = await db.genre.create(
		{ title: 'Biopic', 
      createdAt: new Date(), 
      updatedAt: new Date() 
    },
		{
			raw: true,
			returning: ['id', 'title'],
		}
	);
	console.log(createdGenre); */
	// bulkCreate
	/* await db.author.bulkCreate(authors, {
		raw: true,
		returning: ['id', 'full_name', 'email'],
	}); */

	// Update
	/* const updatedAuthor = await db.author.update(
		{ email: 'some.gmail.com' },
		{
			where: {
				full_name: {
					[Op.like]: 'E%',
				},
			},
		}
	);
	console.log(updatedAuthor); */
  // Destroy
  await db.author.destroy({
    where: {
      id: {
        [Op.eq]: 2
      }
    }
  })
})();
