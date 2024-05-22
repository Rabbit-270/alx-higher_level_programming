-- Show cities stored in a database
SELECT id, name FROM cities WHERE id = (SELECT id FROM states WHERE name='California');
