SELECT fret, fretrpt FROM fretdata
WHERE string=$1
AND note = $2
OR string=$1
AND note =$3
OR string=$1
AND note =$4
OR string=$1
AND note =$5
OR string=$1
AND note =$6
OR string=$1
AND note =$7
OR string=$1
AND note =$8;