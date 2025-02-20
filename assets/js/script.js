function cekKhodam() {
    const name = document.getElementById('nameInput').value;
    const khodams = [
        'Kucing', 'Anjing', 'Kelinci', 'Hamster', 'Panda',
        'Koala', 'Singa Sakti', 'Harimau Kece', 'Elang Edan',
        'Serigala Garing', 'Naga Mager', 'Beruang Bobrok', 'Hiu Genit',
        'Ular Santuy', 'Badak Gokil', 'Banteng Bucin', 'Kucing Kocak',
        'Anjing Asik', 'Kelinci Konyol', 'Hamster Heboh', 'Panda Pelit',
        'Koala Kreatif', 'Monyet Mager', 'Kura-kura Keren', 'Jerapah Jaim',
        'Katak Kocak', 'Capung Centil', 'Burung Belepotan', 'Kepiting Koplak',
        'Laba-laba Lucu', 'Kambing Kocak', 'Sapi Seru', 'Domba Drama',
        'Belalang Bobrok', 'Cicak Ceria', 'Tupai Tidur', 'Bebek Bete',
        'Ayam Aneh', 'Ikan Imut', 'Kelelawar Koplak', 'Kadal Kocak',
        'Gajah Gokil', 'Zebra Zonk', 'Jerapah Jutek', 'Monyet Mager',
        'Kura-kura Koplak', 'Belalang Bobrok', 'Cacing Centil', 'Ular Ulil',
        'Burung Belepotan', 'Kepiting Koplak'
    ];
    const randomIndex = Math.floor(Math.random() * khodams.length);
    const khodam = khodams[randomIndex];
    document.getElementById('result').innerText = `Nama: ${name}\nKhodam Anda: ${khodam}`;
}
