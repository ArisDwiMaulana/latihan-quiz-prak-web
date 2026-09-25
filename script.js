const tombolHitam = document.getElementById('tombol-hitam')
const tombolBiru = document.getElementById('tombol-biru')
const tombolCream = document.getElementById('tombol-cream')
const tombolAdd = document.getElementById('btn-add')
const bgCard = document.getElementById('bg-card')

tombolHitam.addEventListener('click', () => {
    bgCard.style.backgroundColor = '#DDDDDD'
})

tombolBiru.addEventListener('click', () => {
    bgCard.style.backgroundColor = '#CFE2FF'
})

tombolCream.addEventListener('click', () => {
    bgCard.style.backgroundColor = '#F5E6CC'
})

tombolAdd.addEventListener('click', () => {
    alert("fitur belum ada wkwkwkwkwk")
})
