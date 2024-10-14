let data = {
    sepatu: [
        {
            id: 1,
            merksepatu: 'Nike',
            tahunKeluaran: 2022,
            warna: 'Putih',
            lokasi: {
                alamat: 'banggle',
                kota: 'blitar',
                kodePos: '66171'
            },
            harga: {
                biaya: 950000
            }
        },
        {
            id: 2,
            merksepatu: 'Adidas',
            tahunKeluaran: 2023,
            warna: 'hitam',
            lokasi: {
                alamat: 'Jalan sumatra',
                kota: 'samarinda',
                kodePos: '40211'
            },
            harga: {
                biaya: 660000
            }
        },
        {
            id: 3,
            namaLiquid: 'Ventela',
            tahunKeluaran: 2020,
            warna: 'Putih',
            lokasi: {
                alamat: 'Jalan Melawai',
                kota: 'lombok',
                kodePos: '60123'
            },
            harga: {
                biaya: 455000
            }
        },
        {
            id: 4,
            namaLiquid: 'Homiped',
            tahunKeluaran: 2023,
            warna: 'Coklat',
            lokasi: {
                alamat: 'Jalan Melati 45',
                kota: 'malang',
                kodePos: '66137'
            },
            harga: {
                biaya: 470000
            }
        }
    ]
};
// Fungsi untuk filter berdasarkan alamat
function filterBerdasarkanAlamat(alamat) {
    return data.liquids.filter(sepatu => merksepatu.lokasi.alamat.includes(alamat));
}

// Fungsi untuk filter berdasarkan harga minimal
function filterBerdasarkanHarga(min_harga) {
    return data.liquids.filter(sepatu => merksepatu.harga.biaya > min_harga);
}

// Contoh penggunaan:
console.log(filterBerdasarkanAlamat('banggle'));  // Memfilter sepatu yang memiliki 'banggle' dalam alamatnya
console.log(filterBerdasarkanHarga(660000));  // Memfilter sepatu dengan harga lebih dari 660.000