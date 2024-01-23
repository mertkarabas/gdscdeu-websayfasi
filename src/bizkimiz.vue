<template>
    <div>
     <div id="menü">
      
     <router-link to="/" class="customlink"> <p id="anasayfa">Anasayfa</p></router-link> 
     <router-link to="/bizkimiz" class="customlink"> <p id="hakkımızda">Hakkımızda</p></router-link> 
     <router-link to="/iletişim" class="customlink"> <p id="iletişim">İletişim</p></router-link> 
     </div>
     <div id="bizkimiz">
       <div id="bizkimizmetin">
        <h2>The Full Story</h2>
        <h1>Hakkımızda</h1>
        <pre>Google Developer Student Clubs, teknolojiye, yazılıma ve inovasyonlara
   ilgi duyan öğrencileri bir araya toplamak bir araya getirmeyi amaçlayan öğrenci topluluklarıdır.
   GDSC DEU, 2021 yılında Dokuz Eylül Üniversitesi’nde Google’ın başlattığı
   bu programda yer almaya hak kazanmış öğrenci topluluklarından biri olmuştur. 2021 yılından beri çeşitli
   eğitimler, yarışmalar, farkındalık seminerleri düzenleyerek üyelerimizi bu amaçlarda geliştirmeyi hedefliyoruz.</pre>
       
    
       </div>
       <div id="misyonresim"></div>
       <div id="misyon">
        <h1>Misyon</h1>
        <pre>GDSC DEU olarak üyelerimize yazılım alanlarını keşfetme, kendilerini bu alanda geliştirme fırsatı sunuyoruz.  Üyelerimizin sadece yazılım becerilerini değil aynı zamanda sosyal yeteneklerini yükseltmeyi, insan ilişkilerinde deneyim kazanarak alanlarında başarılı insanlar olma yolculuklarında yardımcı olmayı hedefliyoruz.</pre>
       </div>
       
       <div id="vizyon">
        <h1>Vizyon
        </h1>
        <pre>Hackathon, Game Jam, Ideathon yarışmaları ve network etkinlikleri gibi birçok etkinlik düzenleyerek geliştirici olmayı hedefleyen üyelerimizi en güncel teknolojilerinden faydalanarak ortak projeler geliştirmeye ve sektörde öne çıkan insanlar olmaya teşvik ediyoruz.</pre>
       </div>
       <div id="misyonresim"></div>
       
       
       
       
    </div>
    </div>
    </template>
    
    <script>
    export default {
      
    };
    </script>




  
    
    <style>
    *{
      margin:0;
      padding:0;
      box-sizing: border-box;
    }
    
    
    
    #menü{
      width: 100%;
      height:50px;
      background-color: black;
      display:flex;
      text-align: center;
      justify-content: center;
      position:fixed;
      z-index:1;
      
    }
    
    
    #anasayfa{
      margin-top:10px;
      height:70%;
      width:100%;
      background-color: red; 
      border-radius:  3px;
      font-family: Oswald;
      margin-right:5px;
      opacity:1;
     
      transition: opacity 0.4s ease;
      transition: transform 0.2s ease;
    
    }
    #anasayfa:hover{
     opacity:0.7;
     transform: matrix3d(
        1.5, 0, 0, 0,
        0, 1.5, 0, 0,
        0, 0, 1.5, 0,
        0, 0, 0, 1
      );
    
     
    
    }
    
    #hakkımızda{
      margin-top:10px;
      height:70%;
      width:100%;
      background-color: rgb(54, 185, 54);
      border-radius:3px;
      font-family: Oswald;
      opacity:1;
      transition: opacity 0.4s ease;
      transition: transform 0.2s ease;
      
    }
    #hakkımızda:hover{
     opacity:0.7;
     transform: matrix3d(
        1.5, 0, 0, 0,
        0, 1.5, 0, 0,
        0, 0, 1.5, 0,
        0, 0, 0, 1
      );
    
    
    }
    #iletişim{
      margin-top:10px;
      height:70%;
      width:100%;
      background-color: yellow;
      border-radius: 3px;
      font-family: Oswald;
      margin-left: 5px;
      opacity:1;
      transition: opacity 0.4s ease;
      transition: transform 0.3s ease;
    }
    #iletişim:hover{
     opacity:0.7;
     transform: matrix3d(
        1.5, 0, 0, 0,
        0, 1.5, 0, 0,
        0, 0, 1.5, 0,
        0, 0, 0, 1
      );
    
     
    }
    #hosgeldiniz{
      width:100%;
      height:1000px;
    }
    
    
    #metin{
      font-family: Oswald;
      background-color: rgb(72, 72, 212);
      width: 40%;
      height:55%;
      margin-top: 5%;
      font-size: larger;
      border-radius: 5px;
      box-shadow: 1px 3px 1px 1px black;
      opacity:0.9;
      transition: opacity 0.4s ease;
      
      
    }
    
    #metin p{
      font-size:xx-large;
      margin-top:10%;
      
    
    }
    #metin a{
      display:inline-block;
      color:black;
      text-decoration: none;
      background-color: white;
      width: 150px;
      border-radius: 3px;
      margin-top:75px;
      transition: background-color 0.5s ease;
      transition: transform 0.2s ease;
     
      
      
    
    }
    #metin a:hover{
      background-color: black;
      color:white;
      transform: rotateX(360deg);
    }
    
    #metin:hover{
      opacity:1;
    }
    
    
    h2{
      margin-top: 50px;
    }
    
    #hosgeldiniz{
      display:flex;
      text-align: center;
      justify-content: center;
      background-image: url("https://static.wixstatic.com/media/dddd4d_d9289e4c35c84aa09a20e5ba3683d1f5~mv2.jpg/v1/fill/w_1600,h_656,al_c,q_85,enc_auto/dddd4d_d9289e4c35c84aa09a20e5ba3683d1f5~mv2.jpg");
      background-repeat:no-repeat;
      background-size: cover;
      
    }
    
    #fotograf{
      width: 50%;
      height:500px;
      float:left;
      background-image:url("https://static.wixstatic.com/media/dddd4d_cc287a64be234426b5b8b584235f6c3b~mv2.jpg/v1/fill/w_828,h_493,al_c,q_85,enc_auto/dddd4d_cc287a64be234426b5b8b584235f6c3b~mv2.jpg");
      display:flex;
      text-align: center;
      justify-content: center;
      
    }
    
    #fotograf h1{
      margin-top:130px;
      font-family: Oswald;
      font-size: 50px;
      transition: transform 0.3s ease;
      
      
    }
    
    #fotograf h1:hover{
      margin-top:130px;
      font-family: Oswald;
      font-size: 50px;
      transform: rotateY(360deg);
      
      
    }
    #bizkimiz1{
      width:50%;
      height:500px;
      background-color:rgb(72, 72, 212);
      font-family: Oswald;
      float:left;
    
      
    }
    #bizkimiz1 h1{
      margin-left: center;
      justify-content: center;
      display: flex;
      font-size: 50px;
      margin-top:30px;
    
    }
    
    #bizkimiz1 p{
      margin:10px;
      font-size: 20px;
      margin-top:100px;
    }
    
    #etkinlikler{
      width:100%;
      height:1600px;
      background-color: rgb(54, 185, 54);
    }
    
    #etkinlikler h1{
      width:100%;
      display:inline-flex;
      text-align: center;
      justify-content: center;
      margin-top:100px;
      font-family: Oswald;
      font-size:50px;
    }
    
    #card1{
      width:53%;
      height:400px;
      
      float:left;
      background-image: url(" https://static.wixstatic.com/media/dddd4d_d9289e4c35c84aa09a20e5ba3683d1f5~mv2.jpg/v1/fill/w_1600,h_656,al_c,q_85,enc_auto/dddd4d_d9289e4c35c84aa09a20e5ba3683d1f5~mv2.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      opacity:0.8;
      transition: opacity 0.5s ease;
      margin-top:100px;
    
    }
    #card1 p{
      font-family: Oswald;
      display:flex;
      text-align: center;
      justify-content: center;
      font-size: 30px;
      margin-top:50px;
      width:100%;
      height: 100%;
      transition: opacity 0.5s ease;
    
    }
    #card1:hover{
      opacity:1;
      
      
    }
    #card1 p:hover{
      opacity:0;
    }
    
    
    #card2{
      width:45%;
      height:400px;
    
      float:left;
      margin-left:2%;
      margin-top:100px;
    
      background-image:url("https://static.wixstatic.com/media/dddd4d_cc287a64be234426b5b8b584235f6c3b~mv2.jpg/v1/fill/w_828,h_493,al_c,q_85,enc_auto/dddd4d_cc287a64be234426b5b8b584235f6c3b~mv2.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      opacity:0.8;
      transition: opacity 0.5s ease;
     
      
    
    }
    
    #card2 p{
      font-family: Oswald;
      display:flex;
      text-align: center;
      justify-content: center;
      font-size: 30px;
      margin-top:50px;
      width:100%;
      height: 100%;
      transition: opacity 0.5s ease;
    
    }
    
    #card2:hover{
      opacity:1;
      
      
    }
    #card2 p:hover{
      opacity:0;
    }
    
    #footer{
      background-color:black;
      color:white;
      font-family: Oswald;
    }
    #footer p{
      display: flex;
      text-align: center;
      justify-content: center;
      
    }
    .customlink{
        font-family: Oswald;
        text-decoration: none;
        width:20%;
        display:flex;
      text-align: center;
      justify-content: center;
      color:black;
    }
    

    #contact {
      width:100%;
      
      background-color: rgb(72, 72, 212);
      height:10000px;

    }
    #contact h1{
        margin-top:100px;
        margin-left:50px;
      

    }
    #contact p{
        margin-top:50px;margin-left:50px;
      

    }
    #contactmetin{font-family: Oswald;

      width: 40%;
      height:55%;
      margin-top: 5%;
      font-size: larger;
      float:left;
      

    }

  #contactmetin h2{
    margin-top:100px;
    margin-left:50px;
  }

  #sosyalmedya pre{
    font-family: Oswald;
    margin-left:50px;
    
    
  }
        
  #bizkimiz {
      width:100%;
      
      background-color: rgb(72, 72, 212);
      height:1000px;
      
      

    }
    #bizkimizmetin{font-family: Oswald;
      margin-top: 100px;
      width: 100%;
      height:55%;
      display:block;
      transition: transform 0.3 ease;
    }
      
      
      



#bizkimizmetin pre{
         
        font-family: Oswald;
        font-size: 20px;;
        display:flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        margin-top:30px;
    }


@media screen and (max-width: 768px) {
  #bizkimizmetin pre {
    font-size: 15px; /* Mobilde daha küçük bir font boyutu */
  }
}

#bizkimizmetin h1{
      margin-top:0;
      width: 100%;
      

    }
#bizkimizmetin h2{
        display:flex;
        justify-content: center;
        align-items: center;
        margin-top:0; width: 100%;
        
      

    }
    
    
  #misyonresim{

    width:50%;
    height:500px;
    float:left;
    display:block;
     background-image:url(https://undergrad.cs.umd.edu/sites/undergrad.cs.umd.edu/files/GDSC_Logo_White_Background_0.png);
     background-repeat: no-repeat;
     background-size:cover;
     background-position: center center;


  }  
  #misyon{
    background-color: red;
    width:50%;
    height:500px;
    float:left;
    display:block;
    
  }

  #misyon h1{
    font-family: Oswald;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:10px;
    width:100%;
    transition: transform 0.3s ease;
  }
  #misyon h1:hover{
   transform: rotateY(360deg);
  }
  

  #misyon pre{
    font-family: Oswald;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:100px;
    font-size: large;
    width:100%;
  }

  #vizyon{
    background-color:yellow;
    width:50%;
    height:500px;
    float:left;
    display:block;
    
  }
  #vizyon h1{
    font-family: Oswald;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:10px;
    transition: transform 0.3s ease;
  }
  #vizyon h1:hover{
   transform: rotateY(360deg);
  }

  #vizyon pre{
    font-family: Oswald;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:100px;
    font-size: large;
  }

  #misyon pre, #vizyon pre {
    white-space: pre-wrap;
}



    </style>
    