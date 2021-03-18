const judul = document.querySelector('.kalimat')
const tabel = document.querySelector('.tabel')

judul.addEventListener('click', function(){
    tabel.classList.toggle('dissolve')
    judul.classList.toggle('slide')
    tabel.classList.toggle('slide')
})

