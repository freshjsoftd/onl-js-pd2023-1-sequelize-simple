const db = require('./db/models');
// const { Op } = require('sequelize');

(async function () {
  const {Sequelize: {Op}} = db;
	// await db.sequelize.sync({force: true});
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
	/* const national = await db.nationality.create(
		{
			title: 'javascript',
		},
		{
			raw: true,
			returning: ['id', 'title'],
		}
	);
	console.log("National Is", national); */
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
  /* await db.author.destroy({
    where: {
      id: {
        [Op.eq]: 2
      }
    }
  }) */
  // FindAll
  /* const national = await db.nationality.findAll({
		where: {
			id: 1,
		},
		attributes: ['title'],
		raw: true,
		returning: ['title'],
  });
  console.log(national); */
	// Magic methods or mixins
	const [book1] = await db.book.findAll({where: {
		id: 8
	}});
	const genreByBookId = await book1.getGenre()
	console.log(genreByBookId);
	// console.log(book1);
	
})();
