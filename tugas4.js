let api = require('./node_modules/cross-fetch');

let apiFetch = api('https://jsonplaceholder.typicode.com/users');

let ambilData = new Promise((resolve, reject) => {
    apiFetch.then(res => {
        if(res.status == 200) {
            resolve('Berhasil')
            return res.json();
        }else if (res.status == 404) {
            reject (new Error ('Not Found'))
        }else{
            reject(new Error ('Gagal'))
        }
    }).then(name => {
        name.map(item => {
            console.log(`Nama : ${item.name}`);
        })
    })
})

let ambilSemuaData = () => {
    ambilData
    .then((nilai) => {
        console.log(nilai)
    })
    .catch((err) => {
        console.log(`Belum berhasil ${err.message}`)
    })
}

ambilSemuaData();