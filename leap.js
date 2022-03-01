var year=2001;

if((year%4==0) && (year%100==0) || (year%400==0)){
    console.log(`entered year${ year} is leap year` );
} else{
    console.log(`entered year ${ year} is not a leap year`);
}