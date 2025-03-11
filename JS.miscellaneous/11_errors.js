try {
    const pi = 3.14;

    pi = 10; // TypeError: Assignment to constant variable.
} catch {
    console.log('Server is busy. try later again')
}