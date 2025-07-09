function swapFirstLastWord(string) {
    let words = string.trim().split(" ");

    if (words.length < 2) return "";

    else if (words.length === 2) return words[1] + " " + words[0];

    else
        return (words[words.length - 1] + " " + words.slice(1, words.length - 1).join(" ") + " " + words[0]);
}

console.log(swapFirstLastWord("Hello World"));
console.log(swapFirstLastWord("I like JavaScript"));
console.log(swapFirstLastWord("foo bar foo bar"));
console.log(swapFirstLastWord(""));
console.log(swapFirstLastWord("  "));
console.log(swapFirstLastWord("Hello"));
console.log(swapFirstLastWord("Hello   "));




const countOccurrence = (str1, str2) => {
    let arrOfOccurrences = []

    for (char of str2) {
        arrOfOccurrences.push(str1.split('').filter(charStr1 => charStr1.toLowerCase() === char.toLowerCase()).length)
    }
    return arrOfOccurrences.sort()[0]
}

console.log(countOccurrence("Javascript", "Java"));
console.log(countOccurrence("Hello", "World"));
console.log(countOccurrence("Can I can a can", "anc"));
console.log(countOccurrence("Hello", "l"));
console.log(countOccurrence("IT conversaitons", "IT"));



function reverseStringWords(string) {
    let reverseStr = []
    let str = string.split(' ')

    for (let j = 0; j < str.length; j++) {
        let word = str[j]

        for (let i = word.length - 1; i >= 0; i--) {
            reverseStr.push(word[i])
            if (i === 0) reverseStr.push(' ')
        }

    }
    return reverseStr.join('')
}


console.log(reverseStringWords("Hello World"))
console.log(reverseStringWords("I like JavaScript"))
console.log(reverseStringWords("Hello"))
console.log(reverseStringWords(""))
console.log(reverseStringWords("    "))

function fibonacciSeries2(number) {
    let series = [0, 1]

    for (let i = series.length - 1; i < number; i++) {
        series.push(series[i] + series[i - 1])
    }

    return series[number - 1]
}

console.log(fibonacciSeries2(2));
console.log(fibonacciSeries2(4));
console.log(fibonacciSeries2(8));
console.log(fibonacciSeries2(9));
console.log(fibonacciSeries2(1));


function canFormString(str1, str2) {
    let str1Arr = str1.split('');
    let str2Arrs = str2.split('')
    for (let str2Arr of str2Arrs) {
        if (str1Arr.includes(str2Arr)) {
            str1Arr = str1Arr.replace(str2Arr, '')
        }
    }

}

console.log(canFormString("Hello", "Hi"));
console.log(canFormString("programming", "gaming"));
console.log(canFormString("halogen", "hello"));
console.log(canFormString("CONVERSATION", "voices rant on"));
console.log(canFormString("12", "123"));



function arrFactorial(array) {
    let result = [];
if (array.length === 0) return []
    for (let i = 0; i < array.length; i++) {
        let multiple = 1
        for (let j = 1; j <= array[i]; j++) {
            multiple *= j
        }

        result.push(multiple);
    }

    return result;
}


console.log(arrFactorial([1, 2, 3, 4]));
console.log(arrFactorial([0, 5]));
console.log(arrFactorial([5, 0, 6]));
console.log(arrFactorial([]));