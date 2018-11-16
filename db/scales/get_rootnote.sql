SELECT fret, fretrpt FROM fretdata
WHERE string=$1
AND note = $2