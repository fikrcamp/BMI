function BMI(weight,height){
    bmi = weight / (height * height)
    return`this person has a weight of ${weight} and a height of ${height} thus their BMI Is ${bmi}`
}

let ali = BMI(50,1.8);
console.log(ali);
let mohamed = BMI(53,1.6);
console.log(mohamed);
