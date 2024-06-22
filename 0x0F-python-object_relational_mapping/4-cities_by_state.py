#!/usr/bin/python3
'''
List cities and their states.
'''
import MySQLdb
from sys import argv

if __name__ == "__main__":
    usr = argv[1]
    pss = argv[2]
    dB = argv[3]
    Hst = "localhost"
    prt = 3306

    query = "SELECT cities.id, cities.name, states.name FROM cities, "
    query = query + "states WHERE cities.state_id = states.id "
    query = query + "ORDER BY cities.id ASC"

    conn = MySQLdb.connect(host=Hst, user=usr, passwd=pss, db=dB, port=prt)
    cur = conn.cursor()
    cur.execute(query)

    data = cur.fetchall()
    for state_city in data:
        print(state_city)
    cur.close()
    conn.close()
