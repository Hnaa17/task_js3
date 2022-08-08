// Buat 2 program bebas menggunakan promise

// A.

// let lulus = (nilai) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             try {
//                 if (nilai >= 70 && nilai <=100) throw resolve ('Anda Lulus Ujian!');
//                 if (nilai >= 0 && nilai <= 69) throw reject ('Anda Tidak Lulus Ujian!');
//                 if (nilai > 100 || nilai < 0) throw reject ('Nilai salah');
//             }catch (err){
//                 return err;
//             }
//         }, 500);
//     });
// };

// lulus (110)
// .then(result => console.log(result))
// .catch(error => console.log(error))



// B.

// let kandunganMakanan = (input) => {
//     return new Promise((resolve, reject) => {
//         let seimbang = ['karbohidrat', 'protein', 'vitamin', 'lemak', 'mineral'];
//         let cekSehat = seimbang.includes(input);
//         if(cekSehat){
//             return resolve('Termasuk 4 sehat 5 sempurna');
//         }else{
//             reject ('Tidak termasuk 4 sehat 5 sempurna');
//         }
//     });
// };

// kandunganMakanan('serat')
//     .then(res => console.log(res)) 
//     .catch(err => console.log(err))