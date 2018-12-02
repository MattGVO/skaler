update usertuning
set tuningname = $1
where userid = (select userid from users where useremail=$2)
and tuningname = $3;