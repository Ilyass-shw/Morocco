class School {
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name(){
        return this._name
    }
    get level(){
        return this._level
    }
    get numberOfStudents(){
        return this._numberOfStudents
    }
    set numberOfStudents(num){
        if(typeof num === 'number'){
        this._numberOfStudents = num
        }else{
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
    }
    quickFacts(){

    }
    pickSubstituteTeacher(){

    }
}

class Primary extends School{
    constructor(pickupPolicy){
        this._pickupPolicy = pickupPolicy 
    }
    get pickupPolicy(){
        return this._pickupPolicy 
    } 
}

class Middle extends School{}

class High extends School{
    constructor(sportsTeams){
        this._sportsTeams = sportsTeams 
    }
    get sportsTeams(){
        return this._sportsTeams 
    } 
}

