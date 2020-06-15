;(function(){
    window.Player = class {
        constructor(formId, gameWrapId ,[...imgAvatar],{...description}, idInfoPlayer){
            this.player = [];         
            this.avatars = [...imgAvatar];
            this.form = document.getElementById(formId);
            
            this.gameWrapId = document.getElementById(gameWrapId);
            this.playerAvatar= document.querySelector(idInfoPlayer);

            this.description = {description};
            this.divTop = document.createElement('div');
            
            this.text = document.createElement('p');
            this.text.classList.add('form-player__text');
            this.text.innerText = description.description;
                       
            this.divWrapLabel = document.createElement('div');
            this.divWrapLabel.classList.add('input-wrap');
            
            this.divWrapLabel.innerHTML = `<label class="form-player__label">${description.label}<input type="text" class="form-player__input" maxlength="20" placeholder="кодовое имя"></label>`
            
            this.divTop.appendChild(this.text);
            this.divTop.appendChild(this.divWrapLabel);
            
            this.form.prepend(this.divTop);

            this.divCardWrap = document.createElement('div');
            this.divCardWrap.classList.add('form-player__container');
            
            for(let i = 0; i<this.avatars.length; i++){
                let divCard =document.createElement('div');
                divCard.classList.add('card-player');
                divCard.innerHTML = `<input type="radio" name="player" value="${this.avatars[i].name}" class="radio-player" id="player-${i+1}">
                <label class="label-player" for="player-${i+1}">
                <img src="img/player-avatar/${this.avatars[i].img}" alt="${this.avatars[i].name}" class="player-avatar">${this.avatars[i].name}</label>`;
                this.divCardWrap.appendChild(divCard);
            };
            
            
            this.divTop.appendChild(this.divCardWrap);
            this.form.prepend(this.divTop);

            this.form.addEventListener('submit', function(e){
                e.preventDefault();
                let radio = document.querySelectorAll('.radio-player');
                let labelValue = document.querySelector('.form-player__input').value;

                this.createPlayer(labelValue,radio,e);
                this.createAvatar();
                this.playerAvatar.classList.remove('active');
                
            }.bind(this));  

            
            let divgame = this.gameWrapId;
            this.form.addEventListener('click', function(e){
                let tag = e.target;                
                if(tag.classList.contains('form-btn')){           
                    this.classList.add('active');
                    divgame.classList.remove('active'); 
                    
                    
                };
            });
        }
        
        createAvatar(){           
            let playerAvatar = document.createElement('div');
            let namePlayer = document.createElement('span');
            let div = document.createElement('div');
            div.classList.add('avatar-wrap');
            
            if(this.player.length==0){
                namePlayer.innerText = 'Агент 007';          
            }else if(this.player.length==1){
                namePlayer.innerText = this.player[0];
            } else{
                namePlayer.innerText = this.player[0];
                playerAvatar.innerHTML =`<img src='img/player-avatar/${this.player[1]}'>`;
                div.prepend(playerAvatar)
            }
            
            div.append(namePlayer)
            this.playerAvatar.appendChild(div);  
        }

        createPlayer(labelValue, radio, e){
               if(labelValue){
                   this.player.push(labelValue);
                  } else if(labelValue === ''){
                    let a = '';
                    for(let i = 0; i < radio.length; i++){
                    if(radio[i].checked){
                            a = i;
                            this.player.push(this.avatars[a].name);
                            this.player.push(this.avatars[a].img);
                            break;
                        }

                    } 

                }
                return this.player;   
            }
        
    };
    
}());
