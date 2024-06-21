#!/usr/bin/python3
'''
Lists all states that start with N
'''
import MySQLdb
from sys import argv

if __name__ == "__main__":
    query = "SELECT * FROM states ORDER BY states.id ASC"
    Host = "localhost"
    Port = 3306
    U = argv[1]
    P = argv[2]
    DB = argv[3]

    conn = MySQLdb.connect(host=Host, port=Port, user=U, passwd=P, db=DB)
    cur = conn.cursor()
    cur.execute(query)
    states = cur.fetchall()
    for state in states:
        if state[1].startswith('N'):
            print(state)
    cur.close()
    conn.close()
