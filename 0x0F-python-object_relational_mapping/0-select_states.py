#!/usr/bin/python3
'''
Lists all states stored in a database
'''
import MySQLdb
from sys import argv

if __name__ == "__main__":
    U = argv[1]
    P = argv[2]
    D = argv[3]
    H = "localhost"
    p = 3306

    conn = MySQLdb.connect(host=H, port=p, user=U, passwd=P, db=D)
    cur = conn.cursor()
    cur.execute("SELECT * FROM states ORDER BY states.id ASC")
    states = cur.fetchall()
    for state in states:
        print(state)
    cur.close()
    conn.close()
