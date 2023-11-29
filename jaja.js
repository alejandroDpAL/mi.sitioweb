db.vigilant.insertMany([
    {
        "vigilant_code":74,
        "age": 19,
    },
    {
        "vigilant_code":75,
        "age": 30,
    }
])


db.contract.insertMany ([
    {
        "vigilant_code":ObjectId("656784eeebe08f60a39d80b1"),
        "branch-code": ObjectId("65650e1847fb4e7fc3785407"),
        "contract_date": new Date("2023-01-23"),
        "weapon_contract": new Date("2023-01-23"),
    },
    {
        "vigilant_code":ObjectId("656784eeebe08f60a39d80b2"),
        "branch-code": ObjectId("65650e1847fb4e7fc3785408"),
        "contract_date": new Date("2023-02-23"),
        "weapon_contract": new Date("2023-02-23"), 
    }
])

db.band.insertOne ({

    "band_code":88,
    "members" : 12,
})
db.thief.insertOne ({
    "name":"Pablo Escobar",
    "fk_band" : ObjectId("65678b5bebe08f60a39d80b5"),
})
db.judge.insertOne ({
    "internal_key":1242,
    "name":"Maria Beltran",
    "years_service":2,
})
db.thefts.insertOne ({
    "robbery_id":90,
    "date_theft":new Date("2023-02-23"),
    "conviction":"none",
    "conviction_years":6,
    "fk_branch":ObjectId("65650e1847fb4e7fc3785408"),
    "fk_thief":ObjectId("656799f4ebe08f60a39d80b6"),
    "fk_judge":ObjectId("65679b0eebe08f60a39d80b7"),
})
