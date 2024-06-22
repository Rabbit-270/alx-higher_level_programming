#!/usr/bin/python3
'''
Retrieves the state from My database entered as input.
The input MUST not be an SQL injection
'''
import MySQLdb
from sys import argv

if __name__ == "__main__":
    Usr = argv[1]
    Pss = argv[2]
    DB = argv[3]
    Stte = argv[4]
    Hst = "localhost"
    prt = 3306
    Injection = False
    if (State.find(';') == -1):
        Injection = True
    # if we get up to this point, it's not an injection.
    if (Injection is False):
        conn = MySQLdb.connect(host=Hst, port=prt, user=Usr, passwd=Pss, db=DB)
        cur = conn.cursor()

        query = "SELECT * FROM states WHERE name='{}'".format(Stte)
        query = query + " ORDER BY states.id ASC"
        cur.execute(query)

        results = cur.fetchall()
        for state in results:
            print(state)
        cur.close()
        conn.close()
