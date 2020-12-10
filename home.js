alert("Selamat datang di website BeautyKu")

window.addEventListener('scroll', scrollganti);
    function scrollganti()
    {
        let header = document.querySelector('.navbar');
        let windowPosition = window.scrollY > 0;
        header.classList.toggle('aktif', header, windowPosition);
    }

function tampil()
{   
    var usia = document.getElementById("usia");
    var tipe = document.getElementById("tipe");
    var breakout = document.getElementById("breakout");
    var masa = document.getElementById("masa");
    var cuaca = document.getElementById("cuaca");
    var keluhan = document.getElementById("keluhan");

    if(usia.value == "")
        {
            alert("Masukkan usia Anda");
            usia.focus();
        }
    else if(tipe.value == "")
        {
            alert("Masukkan tipe kulit Anda");
            tipe.focus();
        }
    else if(breakout.value == "")
        {
            alert("Pilih kapan periode breakout Anda");
            breakout.focus();
        }
    else if(masa.value == "")
        {
        alert("Pilih lama masa breakout Anda");
        masa.focus();
        }
    else if(cuaca.value == "")
        {
        alert("Masukkan cuaca lingkungan di sekitar Anda");
        cuaca.focus();
        }
    else if(keluhan.value == "")
        {
        alert("Masukkan keluhan Anda")
        }
    else{
        alert("Yuk lihat hasil kulit Anda")
    }

    var usia = document.forms["cekkulit"]["usia"].value;
    var tipe = document.forms["cekkulit"]["tipe"].value;
    var breakout = document.forms["cekkulit"]["breakout"].value;
    var masa = document.forms["cekkulit"]["masa"].value;
    var cuaca = document.forms["cekkulit"]["cuaca"].value;
    var keluhan = document.forms["cekkulit"]["keluhan"].value;

    var tabel = document.getElementById("tabel");
    var row = tabel.insertRow(-1);
    var kolom1 = row.insertCell(0);
    var kolom2 = row.insertCell(1);
    var kolom3 = row.insertCell(2);
    var kolom4 = row.insertCell(3);
    var kolom5 = row.insertCell(4);
    var kolom6 = row.insertCell(5);

    kolom1.innerHTML = usia;
    kolom2.innerHTML = tipe;
    kolom3.innerHTML = breakout;
    kolom4.innerHTML = masa;
    kolom5.innerHTML = cuaca;
    kolom6.innerHTML = keluhan;
}