#!/usr/bin/python3
''' Shows a state provided by a user '''
import MySQLdb
from sys import argv

if __name__ == "__main__":
    uN = argv[1]
    pW = argv[2]
    dN = argv[3]
    Name = argv[4]
    Host = "localhost"
    query = "SELECT * FROM states WHERE name LIKE BINARY '{}' "
    query = query + "ORDER BY states.id ASC"

    conn = MySQLdb.connect(host=Host, port=3306, user=uN, passwd=pW, db=dN)
    myCur = conn.cursor()
    myCur.execute(query.format(Name))
    state = myCur.fetchall()
    for s in state:
        print(s)
    myCur.close()
    conn.close()
