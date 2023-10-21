const db = require('./db/models');
const bcrypt = require('bcrypt');
// const { Op } = require('sequelize');

(async function () {
	const {
		Sequelize: { Op },
	} = db;
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
	/* const createdCustomer = await db.customer.create(
		{
			full_name: 'Jhon Doe',
			email: 'j-d@gmail.com',
			password: 'awerty',
		},
		{
			// raw: true,
			returning: ['full_name', 'password'],
		}
	);
	console.log(createdCustomer); */
	/* const national = await db.nationality.create(
		{
			title: 'javascript',
		},
		{
			// raw: true,
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
	/* const [book1] = await db.book.findAll({where: {
		id: 8
	}});
	const genreByBookId = await book1.getGenre()
	console.log(genreByBookId); */
	// console.log(book1);

	/* const national = await db.nationality.findByPk(1, {
		attributes: ['id', 'title'],
		// raw: true
	})
	console.log(national); */
	// Use bcrypt
	/* const password = 'QWerty';
	const anotherOnePassword = 'asdfgh'
	const hash = bcrypt.hashSync(password, 10);
	console.log(hash);
	const compareResult = bcrypt.compareSync(password, hash);
	console.log(compareResult);
	const compareResultOne = bcrypt.compareSync(anotherOnePassword, hash);
	console.log(compareResultOne); */

	// Use join
	/* const authNat = await db.nationality.findAll({
		where: {
			id: [1, 5],
		},
		attributes: ['title'],
		include: {
			model: db.author,
			attributes: [['full_name', 'login'], 'email'],
			where: {
				full_name: {
					[Op.like]: 'S%'
				}
			}
			// required: true
		},
		raw: true
	});
	console.log(JSON.stringify(authNat, null, 2)); */
	// Magic methods
	const nat = await db.nationality.findOne({
		where: {
			id: 1
		},
		
	})
	const numb = await nat.getAuthors();
	console.log(numb[0]);
})();
