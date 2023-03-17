let i;

for(let i = 1; i <= 100; i++){
    if ( i % 15 == 0)
    document.write("fizzbuzz" + " ");
    else if ( i % 3 ==0 )
    document.write("Fizz"+ "");
    else if ( i % 5 ==0)
    document.write("buzz"+ "");
    else
    document.write(i +"")
}