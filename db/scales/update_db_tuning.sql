update usertuning
set tuningname = $1, 
    one = $4,
    two = $5,
    three =$6,
    four = $7,
    five = $8,
    six = $9,
    seven = $10,
    eight = $11
where userid = (select userid from users where useremail=$2)
and tuningname = $3;