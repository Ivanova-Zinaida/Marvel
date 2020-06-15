;(function(){
   window.GamePairedPictures = class {
       constructor(id, {...srcImg},idInfpGame,modulWin, {...textWinModal}){
           
           this.divContainer = document.querySelector(id);
           this.infoGame = document.querySelector(idInfpGame);
           this.modulWin = document.createElement('div');
           this.srcImg = {...srcImg};

           this.level = 1;
           this.startArayCardGame = 12;
           this.arrImg = [];
           this.arrImgTwo = [];
           this.openPairsOfCard = 0;
           this.stopNumber = 28;
           this.number = 0;
           
           this.modulWin.classList.add('modul-wrap');

           this.topWrap = document.createElement('div');
           this.spanAttempt = document.createElement('span');
           this.spanAttempt.classList.add('span-attempt');
           this.spanLevel = document.createElement('span');
           this.spanLevel.classList.add('level');
           
           this.textWinModal ={...textWinModal}
           
           this.btnRestart = document.createElement('button');
           this.btnRestart.classList.add('btn-restart');
           this.btnRestart.innerText = 'Продолжить';
           
           this.btnNewGame = document.createElement('button');
           this.btnNewGame.classList.add('btn-newGame');
           this.btnNewGame.innerText = 'Новая игра';
           
           for(let i = 1; i < this.srcImg.number; i++){
               let src= `${this.srcImg.src}/${this.srcImg.nameImg}${i}.${this.srcImg.imgExpantion}`
               this.arrImg.push(src);    
            }
                 
           this.randomImgGame();
           
           document.addEventListener('dragstart', function(e){
                e.preventDefault();
            })
           
           this.divContainer.addEventListener('click', function(e){            
               e.preventDefault();
               let tag = e.target; 

               if(tag.classList.contains('game-img')){
                   
                   let divActiv = tag.parentElement;
                   let setTimeOpenCard = setTimeout(()=>{
                        this.searchIdenticalPictures()
                    },1500);
                    
                   if(!(divActiv.classList.contains('close-card'))){ 
                       let openCard = document.querySelectorAll('.flip');
                    if(openCard.length < 2){
                        divActiv.classList.add('flip');
                        
                        
                    }else if(openCard.length===2){
                       clearTimeout(setTimeOpenCard);
                        setTimeOpenCard 
                    }
                    setTimeout(()=>{
                        this.WinPlayer();
                      },1700); 
                     
                    };     
               };
               
           }.bind(this));
           
           this.btnRestart.addEventListener('click', function(){
               this.newGame();
               this.randomImgGame();
               return this.openPairsOfCard = 0;
               return console.log(this.startArayCardGame)
           }.bind(this));
           
           this.btnNewGame.addEventListener('click', function(){
               window.location.reload();
           })
            
       };
       
         
    randomImgGame(){
  
       this.arrImg.sort(function(){
				return Math.random()*2 - 1;
			});	
        
        for(let i = 0; i < this.startArayCardGame/2; i++){
             let a = this.arrImg[i];
             let b = this.arrImg[i];
             this.arrImgTwo.push(a);
             this.arrImgTwo.push(b);   
        };
        
        this.arrImgTwo.sort(function(){
            return Math.random()*2 - 1;
        });
        
        for(let j = 0; j < this.arrImgTwo.length; j++){  
            let div  = document.createElement('div');         
            div.classList.add('memory-card');
            div.innerHTML = `<img src ='${this.arrImgTwo[j]}' class = 'front-face game-img'><img src ='${this.srcImg.src}/${this.srcImg.nameBackFase}.${this.srcImg.imgExpantion}' class = 'back-face game-img'>`
            this.divContainer.append(div);
            }
            this.spanLevel.innerText = 'Уровень: '+ this.level;
            this.spanAttempt.innerText = 'Попытки: ' + this.number;
            
            this.infoGame.append(this.spanAttempt);
            this.infoGame.append(this.spanLevel);       
        }

    searchIdenticalPictures(){
          let openCard = document.querySelectorAll('.flip');
          let imgFront = document.querySelectorAll('.flip .front-face');
          if(openCard.length===2){
            if(imgFront[0].getAttribute('src') == imgFront[1].getAttribute('src')){
            for(let i = 0; i < openCard.length; i++){
                openCard[i].classList.add('close-card');
                openCard[i].classList.remove('flip');
                this.openPairsOfCard +=1;    
                };   
            }else{
            for(let i = 0; i < openCard.length; i++){
                 openCard[i].classList.remove('flip');
                };
            };  

            this.number += 1;
            this.openLastCard();
                                       
            }
            this.spanAttempt.innerText = 'Попытки: ' + this.number;
            return this.openPairsOfCard;
         }
       
     newGame(){
         this.divContainer.innerHTML='';
         this.modulWin.classList.add('active-win');
         this.number = 0;
         this.level += 1;
         this.arrImgTwo = [];
         return this.startArayCardGame +=6;    
     };

      WinPlayer(){
        let p = document.createElement('p');
        let div = this.modulWin.childNodes;
        
        if(this.openPairsOfCard==this.startArayCardGame-2){
            if(this.openPairsOfCard == this.stopNumber){
                this.modulWin.innerHTML = `<div class = 'win-messege'><h3>Уровень: ${this.level}</h3><p>${this.textWinModal.textStop}</p> <span class='win-span'>Успешно открыто ${this.openPairsOfCard+2} карточек</span><span class='win-span'>Количество попыток: ${this.number+1}<span></div>`; 
                p.append(this.btnNewGame);
            }else {

                this.modulWin.innerHTML = `<div class = 'win-messege'><h3>Уровень: ${this.level}</h3><p>${this.textWinModal.textWin}</p><span class='win-span'>Успешно открыто ${this.openPairsOfCard+2} карточек</span><span class='win-span'>Количество попыток: ${this.number+1}<span></div>`; 
                p.append(this.btnRestart);  
            }
            div[0].append(p) 
            this.modulWin.classList.remove('active-win');
            let parentBlock = this.divContainer.parentElement;
            parentBlock.append(this.modulWin);
          }  
      };
       
      openLastCard(){
        if (this.openPairsOfCard==this.startArayCardGame-2){
            let card = document.querySelectorAll('.memory-card');
            for(let i = 0; i < card.length; i++){
                if(!(card[i].classList.contains('close-card'))){
                    card[i].classList.add('flip');
                }
            }  
        }
      };
          
    };
   

	function getRandom(min, max){
		return Math.random()*(max - min) + min;
	}
    
}());
