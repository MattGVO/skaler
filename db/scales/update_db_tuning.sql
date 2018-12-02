insert into usertuning
(userid,tuningname,one,two,three,four,five,six,seven,eight) 
values ((select userid from users where useremail=$1)
,$2,$3,$4,$5,$6,$7,$8,$9,$10)