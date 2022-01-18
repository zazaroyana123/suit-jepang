function getPilihanKomputer(){
   const comp = Math.random();
   
   if(comp < 0.34) return 'kertas';
   if(comp >= 0.34 && comp < 0.67) return 'gunting';
   return 'batu';
}

let scorkomputer = []
let scorplayer = []
const scorKom = document.querySelector('.scor-kom')
const scorPly = document.querySelector('.scor-ply')
function tambahScore(kondisi){
   if(kondisi == 'KALAH') {
   scorkomputer.push(1);
      for(let i = 1 ; i <= scorkomputer.length; i++){
         scorKom.innerHTML= i;
      }   
   }
   if(kondisi == 'MENANG') {
   scorplayer.push(1);
      for(let i = 1 ; i <= scorplayer.length; i++){
         scorPly.innerHTML= i;
         
      }
   }  
}

function getHasil (comp, player){
   if(player == comp) return 'SERI';
   if(player == 'kertas') return (comp == 'batu')? 'MENANG' : 'KALAH';
   if(player == 'batu') return (comp == 'kertas')? 'KALAH' : 'MENANG';
   if(player == 'gunting') return (comp == 'batu')? 'KALAH' : 'MENANG';
}

function putar() {
   const imgKomputer = document.querySelector('.img-komputer');
   const gambar = ['kertas','gunting','batu'];
   let i = 0;
   const waktuMulai = new Date().getTime();
   
   setInterval(function(){
      if(new Date().getTime()-waktuMulai > 1000){
         clearInterval;
         return;
      }
      imgKomputer.setAttribute('src', 'img/'+gambar[i++]+'.png');
      if(i == gambar.length)  i = 0 ;
   },100)
}

// const besar = document.querySelector('.kertas');
// function besar(){
   // }
   
   const imgPlayer= document.querySelector('.img-player')  
   const pilihan = document.querySelectorAll('li img')
   pilihan.forEach(function(pil){
      pil.addEventListener('click', function(){
         const pilihanKomputer = getPilihanKomputer();
         const pilihanPlayer= pil.className;
         const hasil = getHasil(pilihanKomputer, pilihanPlayer)
         // console.log(pilihanKomputer)
         // console.log(pilihanPlayer)
         // console.log(hasil)
         putar()
         imgPlayer.setAttribute('src', 'img/'+pil.className+'.png')
         
         setTimeout(function(){
            const imgKomputer= document.querySelector('.img-komputer');
            const info = document.querySelector('.info');
            imgKomputer.setAttribute('src', 'img/'+pilihanKomputer+'.png')
            info.innerHTML=hasil
            tambahScore(hasil)
            
            
         },1000);
         setTimeout(function(){
            const imgKomputer= document.querySelector('.img-komputer');
            const info = document.querySelector('.info');
         imgKomputer.setAttribute('src', 'img/tanya.png')
         info.innerHTML=''
         imgPlayer.setAttribute('src', 'img/tanya.png')
      },3000);

   })
})




// const pKertas= document.querySelector('.kertas');

// const pGunting= document.querySelector('.gunting');
// pGunting.addEventListener('click', function(){
//    const pilihanKomputer = getPilihanKomputer();
//    const pilihanPlayer= pGunting.className;
//    const hasil = getHasil(pilihanKomputer, pilihanPlayer)
//    // console.log(pilihanKomputer)
//    // console.log(pilihanPlayer)
//    // console.log(hasil)
//    imgKomputer.setAttribute('src', 'img/'+pilihanKomputer+'.png')
//    info.innerHTML=hasil
// })


// const pBatu= document.querySelector('.batu');
// pBatu.addEventListener('click', function(){
//    const pilihanKomputer = getPilihanKomputer();
//    const pilihanPlayer= pBatu.className;
//    const hasil = getHasil(pilihanKomputer, pilihanPlayer)
//    // console.log(pilihanKomputer)
//    // console.log(pilihanPlayer)
//    // console.log(hasil)
//    imgKomputer.setAttribute('src', 'img/'+pilihanKomputer+'.png')
//    info.innerHTML=hasil
// })