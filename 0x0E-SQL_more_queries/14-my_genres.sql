-- Lists all the genres of the show , 'Dexter'
SELECT tv_genres.name FROM tv_shows INNER JOIN tv_genres INNER JOIN tv_show_genres WHERE tv_genres.id = tv_show_genres.genre_id AND tv_shows.id = tv_show_genres.show_id AND tv_shows.title='Dexter' ORDER BY tv_genres.name ASC;
