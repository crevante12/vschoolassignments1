var employees = []
function Employee (name,job,salary,status="Full time"){
    this.printEmployeeForm = function print(){
        console.log(this.name,this.job,this.salary,this.status)
    }
    this.name = name
    this.job = job
    this.salary = salary
    this.status = status
}
var bob = new Employee("bob","med tech","$3000","Part time")
//console.log(bob)
var nancy = new Employee ("Nancy","Med tech II", "5,000", "Contract")
//console.log(nancy)
var monte = new Employee("Monte","med tech III", "$8,000")
//console.log(monte)
employees.push(monte,nancy,bob)

console.log(monte)