-- Lists all the genres and the number of show linked to
-- each.
SELECT tv_genres.name, COUNT(genre_id) AS 'number_of_shows' FROM tv_show_genres, tv_genres WHERE tv_genres.id = tv_show_genres.genre_id GROUP BY genre_id ORDER BY number_of_shows DESC;
