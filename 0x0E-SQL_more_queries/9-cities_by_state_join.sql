-- Shows all cities in the database
SELECT cities.id, cities.name, states.name FROM cities INNER JOIN states WHERE states.id=cities.id ORDER BY cities.id ASC;
