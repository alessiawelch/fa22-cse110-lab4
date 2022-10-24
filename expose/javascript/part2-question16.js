function part2(){
    let statistics = {
        redCars: 21,
        blueCars: 45,
        greenCars: 12,
        raceCars: 5, 
        rareCars: 2
    };
    
    for(let statistic in statistics) {
        if(statistic.startsWith('r') || statistics[statistic] % 2 == 1){
            console.log(statistic);
        }
    }
}

part2();
