module.exports = function toReadable(number) {
    let uniDig = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tenDig = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let hunDig = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function maxHund(num) {
        if (num % 10 == 0) {
            return hunDig[num / 10];
        } else {
            return `${hunDig[Math.floor(num / 10)]} ${uniDig[number % 10]}`;
        }
    }

    function maxThous(num) {
        const units = uniDig[Math.floor(num / 100)];
        if (num % 100 == 0) {
            return `${units} ${'hundred'}`;
        } else if (num % 100 < 10) {
            return `${units} ${'hundred'} ${uniDig[num % 100]}`;
        } else if (num % 100 < 20 && num % 100 >= 10) {
            return `${units} ${'hundred'} ${tenDig[num % 10]}`;
        } else if (num % 10 == 0) {
            return `${units} ${'hundred'} ${hunDig[num % 100 / 10]}`;
        } else {
            return `${units} ${'hundred'} ${hunDig[Math.floor(num % 100 / 10)]} ${uniDig[num % 10]}`;
        }
    }

    if (number >= 0 && number < 10) {
        return uniDig[number];
    } else if (number >= 10 && number < 20) {
        return tenDig[number % 10];
    } else if (number >= 20 && number < 100) {
        return maxHund(number);
    } else if (number >= 100 && number < 1000) {
        return maxThous(number);
    }

}
