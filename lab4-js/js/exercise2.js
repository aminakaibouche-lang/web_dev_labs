function mention(grade) 
{
    let mark ;
    if( grade < 0 || grade > 20 )
        mark="Invalide grade ";
    else if ( grade < 10 )
        mark ="Fail";
    else if (grade <12 )
        mark="Pass";
    else if (grade < 14)
        mark="Good";
    else if (grade <16 )
        mark ="Very good";
    else
        mark="Excellent";

    return mark;

}
console.log(mention(9.5),mention(12),mention(15.75),mention(18),mention(21));