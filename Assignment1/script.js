let sub1,sub2,sub3,sub4,sub5,total,avg;

sub1 = Number(prompt("Enter sub1 markout of 100:"));
sub2 = Number(prompt("Enter sub2 markout of 100:"));
sub3 = Number(prompt("Enter sub3 markout of 100:"));
sub4 = Number(prompt("Enter sub4 markout of 100:"));
sub5 = Number(prompt("Enter sub5 markout of 100:"));

total = sub1+sub2+sub3+sub4+sub5;
console.log("total marks" ,total)
avg=total/5
console.log('average=',avg)

if(avg>=90){
  console.log("Grade A")
}
else if(avg>=60){
  console.log("Grade B")
}
else if(avg>=40){
  console.log("Grade C")
}
else{
  console.log("Fail")
}