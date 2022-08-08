// 2. Buat program menggunakan callback function dan menampilkan semua bulan menggunakan method map

const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['January', 'February', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        if (!error) {
            callback(null, month);
        }else{
            callback(new Error ("Sorry Data Not Found"), []);
        }
    }, 4000)
}

function hasil(error, bulan) {
    try{
        if(bulan.length == 0) throw error;
        else {
            bulan.map(item => {
                console.log(item)
            })
        }
    }catch(err){
        console.log(err.message)
    }
}

getMonth(hasil)