import androids from './android';
import cameras from './camera';
import laptops from './laptop';

const fakeData = [...androids, ...cameras, ...laptops];


const shuffle = a => {
    for (let i = a.length; i; i--) {
        // console.log(`J Data : ${i}`);

        let j = Math.floor(Math.random() * i);
        // console.log(`J Data : ${j}`);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(fakeData);

export default fakeData;