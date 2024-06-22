#!/usr/bin/python3
'''
List cities by states.
'''
import MySQLdb
from sys import argv

if __name__ == "__main__":
    usr = argv[1]
    pss = argv[2]
    dB = argv[3]
    state = argv[4]
    Hst = "localhost"
    prt = 3306

    query = "SELECT cities.name FROM states "
    query = query + "INNER JOIN cities ON states.id = cities.state_id"
    query = query + " WHERE states.name= %s"
    query = query + " ORDER BY cities.id ASC"
    conn = MySQLdb.connect(host=Hst, port=prt, user=usr, passwd=pss, db=dB)
    cur = conn.cursor()
    cur.execute(query, (state,))

    data = cur.fetchall()
    index = 0
    for city in data:
        if (index == len(data) - 1):
            print(city[0])
        else:
            print(city[0], end=", ")
        index += 1

    cur.close()
    conn.close()
