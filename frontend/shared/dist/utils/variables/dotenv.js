import React from 'react';
import { DB_NAME, API_TOKEN } from "@env";
export default function dotenv() {
  return {
    DB_NAME,
    API_TOKEN
  };
}