-- Show cities stored in a database
SELECT id, name FROM cities WHERE id IN (SELECT id FROM states WHERE name='California');
