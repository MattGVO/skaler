delete from only usertuning
where userid = (select userid from users where useremail=$1)
and tuningname = $2