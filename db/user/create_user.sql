INSERT INTO users
(useremail, userhash)
VALUES
($1, $2)
RETURNING *;