// Sambung program menggunakan then catch dan try catch untuk mengecek hari kerja.

let cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cekHari = dataDay.find((item) => { 
                return item === day;
            })
            try{
                if (cekHari) {throw resolve (`${day} adalah hari Kerja`);   
                } else {throw reject (`${day} bukan hari kerja`)};  
            }catch (error){
                return error;    
            }
        },3000);
    });
};


cekHariKerja ('sabtu')
    .then(res => console.log(res))
    .catch(err => console.log(err)) 