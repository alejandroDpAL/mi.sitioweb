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
db.productive_units.insertMany([
    {
        "up_id":1,
        "up_name":"agriculture",
        "up_descripcion":"production of organic farm products",
        "campus":"Yamboro",
    },
    {
        "up_id":2,
        "up_name":"agroindustry",
        "up_descripcion":"processing of dairy and meat products",
        "campus":"Yamboro",
    },
    {
        "up_id":3,
        "up_name":"gastronomy",
        "up_descripcion":"sales of lunches",
        "campus":"Yamboro",
    },
    {
        "up_id":4,
        "up_name":"livestock",
        "up_descripcion":"livestock production",
        "campus":"Yamboro",
    },
    {
        "up_id":5,
        "up_name":"national coffe school",
        "up_descripcion":"production of organic farm products",
        "campus":"Yamboro",
    },
    {
        "up_id":6,
        "up_name":"natural resources",
        "up_descripcion":"variety of concepts, from air and water quality to biodiversity",
        "campus":"Yamboro",
    },
    {
        "up_id":7,
        "up_name":"public utlities company",
        "up_descripcion":"organization that provides goods or services to the community",
        "campus":"Centro",
    },
    {
        "up_id":8,
        "up_name":"fashion trade and services",
        "up_descripcion":"manufacturing and selling of clothing",
        "campus":"Centro",
    }
])

/* id unidades productivas  */
/* '0': ObjectId("656e228965a479b34197e2b5"),
'1': ObjectId("656e228965a479b34197e2b6"),
'2': ObjectId("656e228965a479b34197e2b7"),
'3': ObjectId("656e228965a479b34197e2b8"),
'4': ObjectId("656e228965a479b34197e2b9"),
'5': ObjectId("656e228965a479b34197e2ba"),
'6': ObjectId("656e228965a479b34197e2bb"),
'7': ObjectId("656e228965a479b34197e2bc") */

/* productos */
db.users.insertMany([
    {
        "user_id":100426973,
        "name":"Elian Candil",
        "usertype":"Aprendiz",
    },
    {
        "user_id":119355841,
        "name":"Lina Tatiana Samboni",
        "usertype":"Aprendiz",
    },
    {
        "user_id":1002337863,
        "name":"Jerson Smith",
        "usertype":"Aprendiz",
    },
    {
        "user_id":1004248797,
        "name":"Leidy Dayana Inchima",
        "usertype":"Aprendiz",
    },
    {
        "user_id":1004269672,
        "name":"Natalia Rojas Rojas",
        "usertype":"Aprendiz",
    },
    {
        "user_id":1004402263,
        "name":"Manuel Cmilo Ome",
        "usertype":"Aprendiz",
    },
    {
        "user_id":1004418839,
        "name":"Oswaldo Samboni Bolanos",
        "usertype":"Aprendiz",
    },
    {
        "user_id":100426973,
        "name":"Dana Artunduaga",
        "usertype":"Aprendiz",
    },
    {
        "user_id":1004492861,
        "name":"Laura Vanessa",
        "usertype":"Aprendiz",
    },
    {
        "user_id":1006410046,
        "name":"Fernando Sarreas",
        "usertype":"Aprendiz",
    },
    {
        "user_id":1007269672,
        "name":"Armando Cuellar",
        "usertype":"Aprendiz",
    },
    {
        "user_id":1007308252,
        "name":"Jhonary Losada",
        "usertype":"Aprendiz",
    },
    {
        "user_id":1007308344,
        "name":"Jerson Sterling",
        "usertype":"Aprendiz",
    },
    {
        "user_id":1007308354,
        "name":"Diego Alejandro Lopez",
        "usertype":"Aprendiz",
    },
    {
        "user_id":1007388140,
        "name":"Karen Daniela Rojas",
        "usertype":"Aprendiz",
    },
    {
        "user_id":96361787,
        "name":"Wilson Martinez Saldarriaga",
        "address":"Cra 19-Cll2",
        "phone":"3167512637",
        "usertype":"Instructor",
    },
    {
        "user_id":125345343,
        "name":"Jesus David Calderon",
        "address":"Cra 12-Cll3",
        "phone":"3122874654",
        "usertype":"Instructor",
    }
])

/* users */
/* insertedIds: {
    '0': ObjectId("656e2bcc65a479b34197e2bd"),
    '1': ObjectId("656e2bcc65a479b34197e2be"),
    '2': ObjectId("656e2bcc65a479b34197e2bf"),
    '3': ObjectId("656e2bcc65a479b34197e2c0"),
    '4': ObjectId("656e2bcc65a479b34197e2c1"),
    '5': ObjectId("656e2bcc65a479b34197e2c2"),
    '6': ObjectId("656e2bcc65a479b34197e2c3"),
    '7': ObjectId("656e2bcc65a479b34197e2c4"),
    '8': ObjectId("656e2bcc65a479b34197e2c5"),
    '9': ObjectId("656e2bcc65a479b34197e2c6"),
    '10': ObjectId("656e2bcc65a479b34197e2c7"),
    '11': ObjectId("656e2bcc65a479b34197e2c8"),
    '12': ObjectId("656e2bcc65a479b34197e2c9"),
    '13': ObjectId("656e2bcc65a479b34197e2ca"),
    '14': ObjectId("656e2bcc65a479b34197e2cb"),
    '15': ObjectId("656e2bcc65a479b34197e2cc"),
    '16': ObjectId("656e2bcc65a479b34197e2cd")
  }
}
 */
/* produts */
db.products.insertMany([
    {
        "_id": 1,
        "name_pdto": "yogurth",
        "description_pdto": "yogurth con frutas",
        "value_pdto": 500,
        "stock": 120,
        "id_up": 2
    },
    {
        "_id": 2,
        "name_pdto": "Chorizo",
        "description_pdto": "Chorizo de pollo",
        "value_pdto": 1000,
        "stock": 500,
        "id_up": 2
    },
    {
        "_id": 3,
        "name_pdto": "Avena",
        "description_pdto": "Avena en vaso",
        "value_pdto": 1000,
        "stock": 600,
        "id_up": 2
    },
    {
        "_id": 4,
        "name_pdto": "Cilantro",
        "description_pdto": "Hortalizas y verduras x Manojo",
        "value_pdto": 500,
        "stock": 300,
        "id_up": 1
    },
    {
        "_id": 5,
        "name_pdto": "Cebolla",
        "description_pdto": "Cebolla Larga X Libra",
        "value_pdto": 800,
        "stock": 100,
        "id_up": 1
    },
    {
        "_id": 6,
        "name_pdto": "Tomate",
        "description_pdto": "Tomate Cerry X Libra",
        "value_pdto": 1500,
        "stock": 200,
        "id_up": 1
    },
    {
        "_id": 7,
        "name_pdto": "Almuerzos",
        "description_pdto": "Almuerzos especiales",
        "value_pdto": 5000,
        "stock": 500,
        "id_up": 3
    },
    {
        "_id": 8,
        "name_pdto": "Cachama",
        "description_pdto": "Cachama Roja X Libra",
        "value_pdto": 4500,
        "stock": 300,
        "id_up": 4
    },
    {
        "_id": 9,
        "name_pdto": "Trucha",
        "description_pdto": "Trucha arreglada X Libra",
        "value_pdto": 6000,
        "stock": 140,
        "id_up": 4
    },
    {
        "_id": 10,
        "name_pdto": "Café",
        "description_pdto": "Café especial X Libra",
        "value_pdto": 15000,
        "stock": 700,
        "id_up": 5
    },
]);

/* compras */
db.shopping.insertMany([
    {
        'Date': new Date("2023-01-01"),
        'quantity': 2,
        'value': 1600,
        'fk_user': 100426973,
        'fk_product': 5
    },
    {
        'Date': new Date("2023-02-01"),
        'quantity': 6,
        'value': 6000,
        'fk_user': 96361787,
        'fk_product': 3
    },
    {
        'Date': new Date("2023-03-23"),
        'quantity': 1,
        'value': 500,
        'fk_user': 125345343,
        'fk_product': 1
    },
    {
        'Date': new Date("2023-04-12"),
        'quantity': 3,
        'value': 45000,
        'fk_user': 1006410046,
        'fk_product': 10
    },
    {
        'Date': new Date("2023-05-12"),
        'quantity': 4,
        'value': 20000,
        'fk_user': 96361787,
        'fk_product': 7 
    },
    {
        'Date': new Date("2023-08-23"),
        'quantity': 2,
        'value': 9000,
        'fk_user': 1004269672,
        'fk_product': 8
    },
    {
        'Date': new Date("2023-07-01"),
        'quantity': 2,
        'value': 2000,
        'fk_user': 100426973,
        'fk_product': 2
    },
    {
        'Date': new Date("2023-10-12"),
        'quantity': 2,
        'value': 12000,
        'fk_user': 125345343,
        'fk_product': 9
    },
    {
        'Date': new Date("2023-11-01"),
        'quantity': 2,
        'value': 3000,
        'fk_user': 1004402263,
        'fk_product': 6  
    }
]);


/* CONSULTAS PUNTO 2 */
 //1 a
 db.shopping.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "fk_user",
            foreignField : "user_id",
            as : "user_info",
        }
    },
    {
        $lookup: {
            from: "products",
            localField: "fk_product",
            foreignField : "_id",
            as : "product_info",
        }
    },
    {
        $addFields: {
            worth: { $multiply: ["$quantity", "$value"] }
        }
    },
    {
        $sort: {worth: -1 }
    },
    {
        $limit: 3 
    },
    {
        $project : {
            "client": "$user_info.name",
            "product": "$product_info.name_pdto",
            "valor comprado": "$worth"
        }
    }
  ])
  //3 d 
  db.shopping.aggregate([
    {
      $lookup: {
        from: "products",
        localField: "fk_product",
        foreignField: "_id",
        as: "product_info"
      }
    },
    {
      $addFields: {
        year: { $year: "$Date" },
        month: { $month: "$Date" },
        product_name: "$product_info.name_pdto"
      }
    },
    {
      $group: {
        _id: { year: "$year", month: "$month", product: "$product_name" },
        total_value: { $sum: "$value" }
      }
    },
    {
      $project: {
        _id: 0,
        product: "$_id.product",
        year: "$_id.year",
        month: "$_id.month",
        valor: "$total_value"
      }
    }
   ])
//4 d
db.products.aggregate([
    {
        $lookup: {
            from: "productive_units",
            localField: "id_up",
            foreignField : "up_id",
            as : "productive_info",
        }
    },
    {
        $group: {
            _id : "$productive_info.up_name",
            totalProducts: { $sum : "$stock"}
        }
    },
    {
        $sort: {totalProducts: -1 }
    },
    {
        $limit: 1 
    },
    {
        $project : {
            "name proveedor": "$_id",
            "cantidad de productos suministrados": "$totalProducts"
        }
    }
 ])

  
   




/* madac coffe */
db.coffe_farmer.insertOne([
    {
      "id":"int",
      "name":"string",
      "phone":"string",
      
    }
    ])

db.farms.insertOne([
    {
      "fk_coffe_farmer":ObjectId("656e3d896eaf105e51857a21"),
      "id_farms":"int",
      "dimention":"float",
    }
    ])
   
db.lots.insertOne([
    {
        "fk_farms":ObjectId("656e3fdf6eaf105e51857a23"),
        "numbers_of_tree":"int",
        "id_lot":"int",
    }
])  

db.sample.insertOne([
    {
      "id_sample":"int",
      "date":"date",
      "amount":"int",
      "who receives":"string",
      "fermentation_process":"string",
      "coffee_humidity":"float",
      "height":"int",
      "drying type":"string",
      "variety":"string",
      "observations":"string",
    }
    ])  

db.analysis.insertOne([
    {
      "id_analysis":"int",
      "date_analysis":"date",
      "analyst":"string",
      "fk_coffe_farmer":ObjectId("656e3d896eaf105e51857a21"),
    }
    ])



    