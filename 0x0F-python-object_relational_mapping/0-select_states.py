#!/usr/bin/python3
import MySQLdb
from sys import argv
'''
This script retrieves stored states from a mysql database.
'''
if __name__ == "__main__":
    ''' The above statement ensures that my script
    is not executed when it is imported '''
    U_n = argv[1]
    Pass = argv[2]
    DB = argv[3]
    Host = "localhost"
    Port = 3306
    db = MySQLdb.connect(host=Host, port=Port, user=U_n, passwd=Pass, db=DB)

    cur = db.cursor()
    cur.execute('SELECT * FROM states ORDER BY states.id ASC')
    states = cur.fetchall()
    for state in states:
        print(state)
    cur.close()
    db.close()
