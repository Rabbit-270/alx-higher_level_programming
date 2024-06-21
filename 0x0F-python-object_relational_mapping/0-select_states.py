#!/usr/bin/python3
import MySQLdb
from sys import argv
'''
This script retrieves stored states from a mysql database.
'''
if __name__ == "__main__":
    ''' The above statement ensures that my script
    is not executed when it is imported '''
    Uname = argv[1]
    Pass = argv[2]
    dbName = argv[3]
    hostName = "localhost"
    port = 3306
    db = MySQLdb.connect(host=hostName, user=Uname, passwd=Pass, db=dbName)

    cur = db.cursor()
    cur.execute('SELECT * FROM states')
    states = cur.fetchall()
    for state in states:
        print(state)
