select rootnote, second, third, fourth, fifth, sixth, seventh 
from scales
where  rootnote = $1 AND name = $2;