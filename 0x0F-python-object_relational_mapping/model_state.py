#!/usr/bin/python3
'''
this module contains the foundational Base class
and a State class used for mapping SQL table.
'''
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Column, Integer, String


Base = declarative_base()


class State(Base):
    '''
    Maps the state table in hbtn_0e_6_usa database.
    '''
    __tablename__ = 'states'
    id = Column(Integer, primary_key=True, unique=True, nullable=False)
    name = Column(String(128), nullable=False)
