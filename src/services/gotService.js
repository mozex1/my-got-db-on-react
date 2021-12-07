export default class GotService {
	constructor(){
		this._apiBase = 'https://www.anapioficeandfire.com/api';
	}
	getResource = async (url) => {
		const res = await fetch(`${this._apiBase}${url}`);
	
		if (!res.ok){
			throw new Error(`Not fetch ${url}, status: ${res.status}`)
		}
	
		return await res.json();
	}

	getAllCharacters = async () => {
		const res = await this.getResource('/characters?page=7&pageSize=10');
		return res.map(this._transformCharacter);
	}
	getCharacter = async (id) => {
		const character = await this.getResource(`/characters/${id}`);
		return this._transformCharacter(character);
	}

    getAllBooks = async () => {
		const res = await this.getResource('/books?page=1&pageSize=10');
		return res.map(this._transformBook);
	}
	getBook = async (id) => {
		const book = await this.getResource(`/books/${id}`);
		return this._transformBook(book);
	}

    getAllHouses = async () => {
		const res = await this.getResource('/houses?page=1&pageSize=10')
		return res.map(this._transformHouse);
	}
	getHouse = async (id) => {
		const house = await this.getResource(`/houses/${id}`);
		return this._transformHouse(house);
	}

	_transformCharacter(char){
		const obj = {
			name: char.name,
			gender: char.gender,
            born: char.born,
            died: char.died,
            culture: char.culture,
		}
		Object.keys(obj).forEach((item, i) => {
			if (!obj[item]) {
				obj[item] = 'No data';
			}
		});
		return obj;
	}

	_transformHouse(house){
		const obj = {
			name: house.name,
			region: house.region,
            words: house.words,
            titles: house.titles,
            overlord: house.overlord,
			ancestralWeapon: house.ancestralWeapon,
		}
		Object.keys(obj).forEach((item, i) => {
			if (!obj[item]) {
				obj[item] = 'No data';
			}
		});
		return obj;
	}

	_transformBook(book){
		const obj = {
			name: book.name,
			authors: book.authors,
            numberOfPages: book.numberOfPages,
			country: book.country,
			released: book.released,
		}
		// const notInfo = 'No data';
		// if(!book.name) {
		// 	obj.name = notInfo;
		// }
		// if(!book.authors) {
		// 	obj.authors = notInfo;
		// }
		// if(!book.numberOfPages) {
		// 	obj.numberOfPages = notInfo;
		// }
		// if(!book.country) {
		// 	obj.country = notInfo;
		// }
		// if(!book.released) {
		// 	obj.released = notInfo;
		// }
		obj.released = obj.released.slice(0, 10)
		return obj;
	}
}


