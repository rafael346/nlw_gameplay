import React, { createContext, useContext, useState } from 'react'

type User = {

}

type AuthContextData = {
  user: User;
}

export const AuthContext = createContext({});