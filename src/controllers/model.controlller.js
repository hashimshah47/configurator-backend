const db = require("../models");
const Model = db.model;
const xlsx = require('xlsx');
const fs = require('fs');
const path = require('path');

exports.getModelPrice = async (req, res) => {
    // const model = await Model.findOne({
    //   _id: req.query.model_id,
    // })
    // res.status(200).send({
    //     name: model.name,
    //     price: model.price
    // });

    const model = await Model.find();
    res.status(200).send({
        model
    })
}

exports.updateModelPrice = async (req, res) => {
    const { model_id, new_price, name } = req.body;

    if (!model_id || new_price == null) {
        return res.status(400).send({ message: "model_id and new_price are required" });
    }

    try {
        let model = await Model.findOne({ number: model_id });

        if (model) {
            // If the model exists, update its price
            model.price = new_price;
            await model.save();
            return res.status(200).send({
                message: "Model price updated successfully",
                name: model.name,
                new_price: model.price
            });
        } else {
            // If the model does not exist, create a new one
            const newModel = new Model({
                model_id: model_id,
                name: name, // Use a placeholder name; adjust as needed
                price: new_price,
            });

            await newModel.save();
            return res.status(201).send({
                message: "Model created successfully",
                name: newModel.name,
                new_price: newModel.price
            });
        }
    } catch (error) {
        res.status(500).send({ message: "Error updating or creating model", error: error.message });
    }
};


// // Read and Save Excel Data
// exports.updateModelPrice = async () => {
//     try {
// const workbook = xlsx.readFile(path.resolve(__dirname, 'ModelsRETISOFT.xlsx'));

//         // const workbook = xlsx.readFile('ModelsRETISOFT.xlsx');
//         const sheetName = workbook.SheetNames[0]; // Assuming data is in the first sheet
//         const worksheet = workbook.Sheets[sheetName];
//         const data = xlsx.utils.sheet_to_json(worksheet);

//         // Save each record to MongoDB
//         for (const record of data) {
//             const modelName = record['Model']; // Access ModelName
//             // const number = record['No.']; // Ac

//             const category = record["Category"]
//             const company = record["Company"]

//             // const number = String(record['No.']).padStart(3, '0')
//             // Save or update the record in the database
//             await Model.findOneAndUpdate(
//                 { name: modelName },
//                 { $set: {
//                      company: company,
//                     category: category
//                 }
//                 },
//                 { upsert: true, new: true }
//             );

//             //     const newModel = new Model({
//             //     number: number,
//             //     name: modelName, // Use a placeholder name; adjust as needed
//             //     price: 10,
//             // });

//             // await newModel.save();
//         }

//         console.log('Excel data saved to MongoDB successfully!');
//     } catch (error) {
//         console.error('Error processing Excel file:', error);
//     }
// };