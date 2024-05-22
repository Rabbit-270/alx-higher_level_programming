-- Show all shows that are in the Comedy genre
SELECT tv_shows.title FROM tv_shows INNER JOIN tv_show_genres INNER JOIN tv_genres WHERE tv_genres.name='Comedy' and tv_genres.id=tv_show_genres.genre_id AND tv_shows.id=tv_show_genres.show_id ORDER BY tv_shows.title ASC
