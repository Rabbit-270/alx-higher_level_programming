-- Show cities stored in a database
SELECT * FROM cities WHERE id = (SELECT id FROM states WHERE name='California');
