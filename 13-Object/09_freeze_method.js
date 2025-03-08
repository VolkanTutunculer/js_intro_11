const book = {
    author: {
        fname: 'Stefan',
        lname: 'Zweig'
    },
    title: 'Amok',
    pages: 62
};

Object.freeze(book.author); // doesnt freeze
book.author = 'is Changed?'
console.log(book.author);

Object.freeze(book); // below changes will not apply. we are making it Immutable.

console.log(Object.isFrozen(book)); // true

book.price = 10.99;
book.pages = 65;
delete book.author;

console.log(book);