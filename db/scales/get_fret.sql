select string, note, fret, fretrpt from fretdata f
join scales s on s.rootnote = f.note
where string = 'D#' 
AND s.name = 'Minor/Ionian'
AND s.rootnote = 'A'