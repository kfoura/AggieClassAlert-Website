import api 
from dotenv import load_dotenv
import os
from pymongo import MongoClient
import time
import asyncio
import json
load_dotenv()

mongo_uri = os.getenv('MONGO_URI')

api = api.Howdy_API()
client = MongoClient(mongo_uri)
db = client['AggieClassAlert']
collection = db['CRNS']

async def main():
    try:
        term_code = '202531'
        crn = '47550'

        collection.insert_one({'CRN': str(crn), 'Term': str(term_code)})

        for i in range(1):
            # res = await api.get_section_details(term_code, crn)
            res = api.get_availability()
            print(res[term_code][crn])
            await asyncio.sleep(1)
    except Exception as e:
        print(f"An error occurred: {e}")

def run():
    asyncio.run(main())

if __name__ == "__main__":
    run()

