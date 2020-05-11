const delay = ms => new Promise(resolve => setTimeout(() => resolve(), ms));



const fb = async () => {
    const mainDiv = document.querySelector(".main");
    let count = 0;
    for (let index = 0; index < 10; index++) {
        for (let index = 0; index < 10; index++) {
            count++;
            try {
                await delay(200);
            } catch (error) {
                console.log(error);
            }
            if (count % 3 == 0 && count % 5 == 0) {

                let e = document.createElement('div');
                e.className = 'fizzbuzz';
                document.querySelector('.main').appendChild(e);
                window.getComputedStyle(e).opacity;
                e.className += ' show';
                e.innerHTML += `FizzBuzz`;

            } else if (count % 3 == 0) {

                let e = document.createElement('div');
                e.className = 'fizz';
                document.querySelector('.main').appendChild(e);
                window.getComputedStyle(e).opacity;
                e.className += ' show';
                e.innerHTML += `Fizz`;



            } else if (count % 5 == 0) {

                let e = document.createElement('div');
                e.className = 'buzz';
                document.querySelector('.main').appendChild(e);
                window.getComputedStyle(e).opacity;
                e.className += ' show';
                e.innerHTML += `Buzz`;


            } else {

                let e = document.createElement('div');
                e.className = 'typ';
                document.querySelector('.main').appendChild(e);
                window.getComputedStyle(e).opacity;
                e.className += ' show';
                e.innerHTML += `${count}`;

            }

        }

        let e = document.createElement('br');
        document.querySelector('.main').appendChild(e);
    }


}

const about = () => {
    event.preventDefault();
    alert('Author: Alexey Kokorev\r\rThis is a program, that prints the numbers from 1 to 100. But for multiples of three prints "Fizz" instead of the number and for multiples of five prints "Buzz".\rFor numbers which are multiples of both three and five prints "FizzBuzz".');
}