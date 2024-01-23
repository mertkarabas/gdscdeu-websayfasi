<template>
    <div>
     <div id="menü">
      
     <router-link to="/" class="customlink"> <p id="anasayfa">Anasayfa</p></router-link> 
     <router-link to="/bizkimiz" class="customlink"> <p id="hakkımızda">Hakkımızda</p></router-link> 
     <router-link to="/iletişim" class="customlink"> <p id="iletişim">İletişim</p></router-link> 
     </div>
     <div id="contact">
       <div id="contactmetin">
        <h1>İletişim</h1>
        <p>İletişime geçmek için aşağıdaki sosyal medya hesaplarımızı, e-posta adresimizi ve telefon numaramızı kullanabilirsiniz. İletişime geçmekten çekinmeyin.</p>
        <h2>Bize Ulaşın!</h2>
        <div id="sosyalmedya">
            <pre>Telefon
 0536 676 7864
            </pre>
            <pre>E-posta
 <a href="mailto:info@gdscdeu.com">info@gdscdeu.com</a>
            </pre>
            <pre>Sosyal Medya
<a href="https://www.instagram.com/gdscdeu/"><i class="fab fa-instagram"></i></a> <a href="https://www.linkedin.com/company/dscdeu/mycompany/?viewAsMember=true"> <i class="fa-brands fa-linkedin" > </i></a> <a href="https://www.youtube.com/channel/UC-pAqxx_d6yN2OTCgIPQrRA"><i class="fa-brands fa-youtube"></i></a>
             
            </pre>
        </div>
        
    
       </div>
       <div id="harita"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3128.080904638377!2d27.205427099999998!3d38.370249799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b961f364ed1fc5%3A0x3a05acfdbae429ca!2sDokuz%20Eyl%C3%BCl%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1703345424293!5m2!1str!2str" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></div>
       
       
       
    </div>
    </div>
    </template>
    
    <script>
    
    export default {
      data () {
        return { 
          
          
         
        }
      },
      
      
    }
    
    
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
      height:1500px;

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

  #sosyalmedya a{
    text-decoration: none;
    color:black;
  
  }
  
  #harita{
    padding-top:250px;
    border-radius: 5px;
    
  }
  #harita iframe{
    border-radius: 5px;
    box-shadow: 1px 3px 1px 1px black;
    margin-left:50px;
    margin-top:70px;
  }
     
       
    
    </style>
    