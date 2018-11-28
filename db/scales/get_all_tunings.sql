select tuningname from usertuning
join users on users.userid = usertuning.userid
where useremail = $1