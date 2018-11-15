select rootnote, second, third, fourth, fifth, sixth, seventh 
from scales
where name = $1 AND rootnote = $2;