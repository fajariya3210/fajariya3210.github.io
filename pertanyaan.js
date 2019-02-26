  var DaftarSoal = [
    {
      soal:"1. Apakah Kepanjangan Dari HTML?",
      jawaban1:"A. Hyper Text Markup Language",
      jawaban2:"C. Hyperlinks Text Markup Language",
      jawaban3:"B. Hyperlinks Markup Language",
      jawaban4:"D. Hyper Markup Language",
      jawabanAsli: 1
    },
    {
      soal:"2. Bagaimana Cara Membuat Baris Baru?",
      jawaban1:"A. <breakline>",
      jawaban2:"C. <br>",
      jawaban3:"B. <break>",
      jawaban4:"D. <newline>",
      jawabanAsli: 2
    },
    {
      soal:"3. Bagaimana Cara Membuat Paragraft?",
      jawaban1:"A. <paragraph>",
      jawaban2:"C. <paragraf>",
      jawaban3:"B. <p>",
      jawaban4:"D. <pr>",
      jawabanAsli: 3

    },
    {
      soal:"4. Bagaimana cara membuat heading di dalam halaman HTML?",
      jawaban1:"A. <h1>",
      jawaban2:"C. <header>",
      jawaban3:"B. <title>",
      jawaban4:"D. <tl>",
      jawabanAsli: 1
    },
    {
      soal:"5. Bagaimana cara membuat background pada element HTML?",
      jawaban1:'A. <body background="red">',
      jawaban2:'C. <body bg="red">',
      jawaban3:'B. <body background-color="red">',
      jawaban4:'D. <body style="background:red"',
      jawabanAsli: 4
    }
  ]



//kode untuk timer
  var c = 60;
  var t;
  var limits = 10
  var timer_is_on = 0;
  
  
  function timedCount() {
  document.getElementById("durasi").innerHTML = c + " detik";
  
    
    c = c - 1;
    t = setTimeout(timedCount, 1000);
    if(c === -1){
    stopCount();
   // alert("waktu habis")
   document.getElementById("durasi").innerHTML = "Waktu Anda Habis"
   if(document.getElementById("durasi").innerHTML = "Waktu Anda Habis" && totalPertanyaan === 0){
    blockPertanyaan();
    document.getElementById("durasi").innerHTML = " Waktu Anda Habis"
    document.getElementById("hasilAkhirPoint").innerHTML = " Dan Anda Belum Menjawab Pertanyaan Satupun"

  }
  }
  }
  
  function startCount() {
  timedCount();
  }
  
  function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
    
    //console.log('ini',totalDurasiku )
  }

  //timedCount();
  startCount();

  //----------

  


  
var point = 0
namaPeserta = ''

totalPertanyaan = 0

var urutanSoal = 0
var totalJawabBenar = 0
var totalJawabSalah = 0



var op1 = document.getElementById("option1")
var op2 = document.getElementById("option2")
var op3 = document.getElementById("option3")
var op4 = document.getElementById("option4")
var buttonLagi = document.getElementById("buttonMulaiLagi")

var hilanginTampilan = document.getElementById("questionContainer")

var soal = document.getElementById("pertanyaannya")
op1.addEventListener("click", pilihJawaban1);
op2.addEventListener("click", pilihJawaban2);
op3.addEventListener("click", pilihJawaban3);
op4.addEventListener("click", pilihJawaban4);

function pilihJawaban1(){
  jawabanAsli = 1
  op1.style.background = "rgb(24, 63, 102)"
  op2.style.background = "rgb(109, 164, 221)"
  op3.style.background = "rgb(109, 164, 221)"
  op4.style.background = "rgb(109, 164, 221)"
}

function pilihJawaban2(){
  jawabanAsli = 2
  op1.style.background = "rgb(109, 164, 221)"
  op2.style.background = "rgb(24, 63, 102)"
  op3.style.background = "rgb(109, 164, 221)"
  op4.style.background = "rgb(109, 164, 221)"
}

function pilihJawaban3(){
  jawabanAsli = 3
  op1.style.background = "rgb(109, 164, 221)"
  op2.style.background = "rgb(109, 164, 221)"
  op3.style.background = "rgb(24, 63, 102)"
  op4.style.background = "rgb(109, 164, 221)"
}

function pilihJawaban4(){
  jawabanAsli = 4
  op1.style.background = "rgb(109, 164, 221)"
  op2.style.background = "rgb(109, 164, 221)"
  op3.style.background = "rgb(109, 164, 221)"
  op4.style.background = "rgb(24, 63, 102)"
}

function resetButton(){
  jawabanAsli = 0
  op1.style.background = "rgb(0, 0, 255)"
  op2.style.background = "rgb(0, 0, 255)"
  op3.style.background = "rgb(0, 0, 255)"
  op4.style.background = "rgb(0, 0, 255)"
}
  function tampilkanSoalnya(){
   document.getElementById("judul").innerHTML = 'Ayo Semangat '+ namaPeserta + '. Kamu Pasti Bisa!'
    judulNama = namaPeserta;
    var ques = DaftarSoal[urutanSoal]
    soal.textContent = ques.soal;
    op1.textContent = ques.jawaban1;
    op2.textContent = ques.jawaban2;
    op3.textContent = ques.jawaban3;
    op4.textContent = ques.jawaban4;
    // var totalDurasiku = 59 - c
    
    
    
  }

  function blockPertanyaan(){
    hilanginTampilan.style.display = "none"
    
  }
  
  
  function result(){
    
    if (point >= 70) {
     
      alert('Selamat Anda Menang')
      
    }else{
      alert('Maaf Anda Gagal')
    }
    
  stopCount()
  var totalDurasiku = 59 - c
  

  console.log('anda menyelesaikan pertanyaan dalam waktu : ', totalDurasiku, " detik")
  blockPertanyaan();
  document.getElementById("hasilPoint").innerHTML = namaPeserta + ' menyelesaikan pertanyaan dalam waktu :' + totalDurasiku +' detik'
  document.getElementById("hasilAkhirPoint").innerHTML = namaPeserta +' Mendapatkan : ' + point + ' point';
  document.getElementById("jawabBenar").innerHTML = "Total Jawaban Benar " +namaPeserta+ " : " + totalJawabBenar + " pertanyaan"
  document.getElementById("jawabSalah").innerHTML = "Total Jawaban Salah " +namaPeserta+ " : " + totalJawabSalah + " pertanyaan"

}

  function kirimJawabannya(){
    if (urutanSoal === DaftarSoal.length-1) {
      if (jawabanAsli === DaftarSoal[urutanSoal].jawabanAsli) {
        point+=20
        totalJawabBenar ++
        totalPertanyaan ++
        console.log(point)
        
      }
      else {
        point-=10
        totalJawabSalah ++
        totalPertanyaan ++
        console.log(point)
        
      }
      result()
      return
    }
    if (jawabanAsli === 0) {
      alert("Kamu belum pilih jawaban, silahkan pilih jawaban terlebih dahulu")
      return
    }
    if (jawabanAsli === DaftarSoal[urutanSoal].jawabanAsli) {
   
    point +=20
    totalJawabBenar ++
    totalPertanyaan ++
    console.log(point)
    
    }
    else if (jawabanAsli !== DaftarSoal[urutanSoal].jawabanAsli) {
      point-=10
      totalJawabSalah ++
      totalPertanyaan ++
      console.log(point)
    
    }
    urutanSoal++
    tampilkanSoalnya(urutanSoal)
    resetButton()
  }
  
  
  var namaPeserta = prompt("Masukkan Nama Anda!")
  tampilkanSoalnya()
  
  
