var soal = [
    {
      question: "1. Jika diperlukan waktu satu menit untuk merebus satu telur, berapa waktu yang diperlukan untuk merebus sepuluh telur?",
      option1: "A. 10 Menit",
      option2: "C. 1 Menit",
      option3: "B. 15 Menit",
      option4: "D. 2 Menit",
      answer: 2
    },
    {
      question: "2. Berapa kali angka 7 muncul di antara bilangan 1 sampai 100?",
      option1: "18 kali",
      option2: "19 kali",
      option3: "20 kali",
      option4: "21 kali",
      answer: 3
    },
    {
      question: "3. A bepergian dengan mobil mulai dari kota P ke kota Q dengan kecepatan tetap 75 km/jam. B juga bepergian dengan mobil mulai dari kota Q ke kota P dengan kecepatan tetap 50 km/jam. Jika A dan B berangkat pada waktu yang bersamaan, saat A dan B bertemu, siapa yang lebih dekat dengan kota P?",
      option1: "A",
      option2: "B",
      option3: "Sama dekat",
      option4: "P",
      answer: 3
    },
    {
      question: "4. Mana yang lebih besar, 18 persen dari 81 atau 81 persen dari 18?",
      option1: "81 persen dari 18",
      option2: "18 persen dari 81",
      option3: "81 persen dari 18",
      option4: "Sama besar",
      answer: 4
    },
    {
      question: "5. A ingin pergi dengan mobil dari kota P ke kota Q dengan kecepatan rata-rata 60 km/jam. Ternyata, setengah perjalanan pertama ditempuh A dengan kecepatan rata-rata 30 km/jam. Berapa kecepatan rata-rata yang harus dicapai A saat dia menempuh setengah perjalanan sisanya sehingga pada akhirnya dia dapat mencapai kecepatan rata-rata keseluruhan 60 km/jam?",
      option1: "A tidak mungkin bisa",
      option2: "120 km/jam",
      option3: "90 km/jam",
      option4: "60 km/jam",
      answer: 1
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
var answer = 0
namaPeserta = ''

//Option
var currentQuestion = 0
var totalQuestion = soal.length
var totalJawabBenar = 0
var totalJawabSalah = 0



var op1 = document.getElementById("option1")
var op2 = document.getElementById("option2")
var op3 = document.getElementById("option3")
var op4 = document.getElementById("option4")
var buttonLagi = document.getElementById("buttonMulaiLagi")

var hilanginTampilan = document.getElementById("questionContainer")

var question = document.getElementById("pertanyaannya")
op1.addEventListener("click", clickOption1);
op2.addEventListener("click", clickOption2);
op3.addEventListener("click", clickOption3);
op4.addEventListener("click", clickOption4);

function clickOption1(){
  answer = 1
  op1.style.background = "rgb(24, 63, 102)"
  op2.style.background = "rgb(109, 164, 221)"
  op3.style.background = "rgb(109, 164, 221)"
  op4.style.background = "rgb(109, 164, 221)"
}

function clickOption2(){
  answer = 2
  op1.style.background = "rgb(109, 164, 221)"
  op2.style.background = "rgb(24, 63, 102)"
  op3.style.background = "rgb(109, 164, 221)"
  op4.style.background = "rgb(109, 164, 221)"
}

function clickOption3(){
  answer = 3
  op1.style.background = "rgb(109, 164, 221)"
  op2.style.background = "rgb(109, 164, 221)"
  op3.style.background = "rgb(24, 63, 102)"
  op4.style.background = "rgb(109, 164, 221)"
}

function clickOption4(){
  answer = 4
  op1.style.background = "rgb(109, 164, 221)"
  op2.style.background = "rgb(109, 164, 221)"
  op3.style.background = "rgb(109, 164, 221)"
  op4.style.background = "rgb(24, 63, 102)"
}

function resetButton(){
  answer = 0
  op1.style.background = "rgb(0, 0, 255)"
  op2.style.background = "rgb(0, 0, 255)"
  op3.style.background = "rgb(0, 0, 255)"
  op4.style.background = "rgb(0, 0, 255)"
}
  function loadQuestion(){
   document.getElementById("judul").innerHTML = 'Ayo semangat '+ namaPeserta + '. Kamu Pasti Bisa!'
    //buttonLagi.style.display = "none"
    judulNama = namaPeserta;
    var ques = soal[currentQuestion]
    question.textContent = ques.question;
    op1.textContent = ques.option1;
    op2.textContent = ques.option2;
    op3.textContent = ques.option3;
    op4.textContent = ques.option4;
    
  }

  function blockPertanyaan(){
    hilanginTampilan.style.display = "none"
    
  }
  
  
  function result(){
    
    if (point >= 90) {
     
      alert('anda pintar')
      
    }
    else if (point <= 80 && point >= 60) {
     
      alert('anda cukup')
    }
    else if (point <=50 && point >= 20) {
      
    }
    else if (point < 20) {
   
    alert('dedel')
  }
  stopCount()
  var totalDurasiku = 59 - c
  

  console.log('anda menyelesaikan pertanyaan dalam waktu : ', totalDurasiku, " detik")
  blockPertanyaan();
  document.getElementById("hasilPoint").innerHTML = namaPeserta + ' menyelesaikan pertanyaan dalam waktu :' + totalDurasiku +' detik'
  document.getElementById("hasilAkhirPoint").innerHTML = namaPeserta +' Mendapatkan : ' + point + ' point';
  document.getElementById("jawabBenar").innerHTML = "Total Jawaban Benar " +namaPeserta+ " : " + totalJawabBenar + " pertanyaan"
  document.getElementById("jawabSalah").innerHTML = "Total Jawaban Salah " +namaPeserta+ " : " + totalJawabSalah + " pertanyaan"
console.log(namaPeserta)
//buttonLagi.style.display =""



  // if(point >= 90){
  //   document.getElementById("ucapanAkhir").innerHTML = "Selamat Anda Berhasil"
  // }
}
  


  function loadNextQuestion(){
    if (currentQuestion === soal.length-1) {
      if (answer === soal[currentQuestion].answer) {
        point+=20
        totalJawabBenar ++
        console.log(point)
        
      }
      else {
        point-=10
        totalJawabSalah ++
        console.log(point)
        
      }
      result()
      return
    }
    if (answer === 0) {
      alert("Kamu belum pilih jawaban, silahkan pilih jawaban terlebih dahulu")
      return
    }
    if (answer === soal[currentQuestion].answer) {
   
    point +=20
    totalJawabBenar ++
    console.log(point)
    
    }
    else if (answer !== soal[currentQuestion].answer) {
      point-=10
      totalJawabSalah ++
      console.log(point)
    
    }
    currentQuestion++
    loadQuestion(currentQuestion)
    resetButton()
  }
  
  
  var namaPeserta = prompt("Masukkan Nama Anda!")
  loadQuestion()
  
  
