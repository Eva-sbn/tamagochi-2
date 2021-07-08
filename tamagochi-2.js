
    class tamagochi {
        constructor(name,food,energy,mood) {
        this.name = name;
        this.food = food;
        this.energy = energy;
        this.mood = mood;
        };
        setName (name) {
            this.name = name
        };
        eat(){
            if(this.food < 5){
                this.food++ 
                this.mood--
            }
        };
        sleep(){
            if(this.energy < 5){
                this.energy++
                this.food--
            }
        };
        play(){
            if(this.mood < 5){
                this.mood++
                this.energy--
            }
        };
        getStatus(){
            let foodStatus = this.food
            if(foodStatus < 3){
                console.log('Я голоден')
            }else{
                console.log('Я не голоден')
            };
    
            let energyStatus = this.energy
            if(energyStatus < 3){
                console.log('Я хочу спать')
            }else{
                console.log('Я не хочу спать')
            };
    
            let moodStatus = this.mood
            if(moodStatus < 3){
                console.log('Мне скучно')
            }else{
                console.log('Мне весело')
            };
    
            let nameStatus = this.name
            if( this.food <= 0 || this.energy <= 0 || this.mood){
                console.log(`${this.name} умер:(`)
            };
    
            console.log(`Имя: ${nameStatus}, Еда: ${foodStatus} (${this.food}), Энергия: ${energyStatus}(${this.energy}), Настроение: ${moodStatus} (${this.mood})`);
        };
    };
        const newTam = new tamagochi()
    