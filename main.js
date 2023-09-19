const box = document.querySelector('.box');
const select = document.getElementById('select');
let url = 'https://islomapi.uz/api/present/day?region=Toshkent';


select.addEventListener('change', (e) => {
    let url = `https://islomapi.uz/api/present/day?region=${e.target.value}`

    fetch(url)
    .then((res) => res.json())
    .then((data) => {
        const { tong_saharlik,quyosh,peshin,asr,shom_iftor,hufton} = data.times;
        box.innerHTML = `
        <h2 class="text">tong: ${tong_saharlik}</h2>
        <h2 class="text">quyosh: ${quyosh}</h2>
        <h2 class="text">peshin: ${peshin}</h2>
        <h2 class="text">asr: ${asr}</h2>
        <h2 class="text">shom: ${shom_iftor}</h2>
        <h2 class="text">hufton: ${hufton}</h2>
        `
    })
    })