function findAvg(scores) {


    let sum = 0;

    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }

    return sum / scores.length;
}


let examScores = [4,5,6,7,8];
let average = findAvg(examScores);

console.log("Your avarage score is: " + average);