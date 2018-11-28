select one, two, three, four, five, six, seven, eight from usertuning
join users on users.userid = usertuning.userid
where useremail = $1
AND tuningname = $2