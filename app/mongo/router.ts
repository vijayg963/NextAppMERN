// import { FindOneAndUpdateOptions, MongoClient } from 'mongodb';
export async function GET() {
  return Response.json({ Name: 'Vijay', lastName: 'gupta' });
}
// async function run() {
//   const uri =
//     'mongodb+srv://vijayg963:vijaygupta@cluster0.uee1cm1.mongodb.net/';

//   const client = new MongoClient(uri);
//   await client.connect();

//   /*
//    * *** FIND DOCUMENTS ***
//    *
//    * Now that we have data in Atlas, we can read it. To retrieve all of
//    * the data in a collection, we call Find() with an empty filter.
//    * The Builders class is very helpful when building complex
//    * filters, and is used here to show its most basic use.
//    */

//   try {
//     const data = await client
//       .db('sample_airbnb')
//       .collection('listingsAndReviews')
//       .find({})
//       .sort({ name: 1 });

//     console.log('object', data);
//   } catch (err) {
//     console.error(
//       `Something went wrong trying to find the documents: ${err}\n`
//     );
//   }

//   // We can also find a single document. Let's find the first document
//   // that has the string "potato" in the ingredients list.
//   // const findOneQuery = { ingredients: 'potato' };

//   // try {
//   //   const findOneResult = await collection.findOne(findOneQuery);
//   //   if (findOneResult === null) {
//   //     console.log(
//   //       "Couldn't find any recipes that contain 'potato' as an ingredient.\n"
//   //     );
//   //   } else {
//   //     console.log(
//   //       `Found a recipe with 'potato' as an ingredient:\n${JSON.stringify(
//   //         findOneResult
//   //       )}\n`
//   //     );
//   //   }
//   // } catch (err) {
//   //   console.error(`Something went wrong trying to find one document: ${err}\n`);
//   // }

//   /*
//    * *** UPDATE A DOCUMENT ***
//    *
//    * You can update a single document or multiple documents in a single call.
//    *
//    * Here we update the PrepTimeInMinutes value on the document we
//    * just found.
//    */
//   // const updateDoc = { $set: { prepTimeInMinutes: 72 } };

//   // The following updateOptions document specifies that we want the *updated*
//   // document to be returned. By default, we get the document as it was *before*
//   // the update.
//   // type CustomUpdateOptions = {
//   //   returnOriginal: boolean;
//   // } & FindOneAndUpdateOptions;

//   // const updateOptions: CustomUpdateOptions = { returnOriginal: false };

//   // try {
//   //   const updateResult = await collection.findOneAndUpdate(
//   //     findOneQuery,
//   //     updateDoc,
//   //     updateOptions
//   //   );
//   //   console.log(
//   //     `Here is the updated document:\n${JSON.stringify(updateResult?.value)}\n`
//   //   );
//   // } catch (err) {
//   //   console.error(
//   //     `Something went wrong trying to update one document: ${err}\n`
//   //   );
//   // }

//   /*      *** DELETE DOCUMENTS ***
//    *
//    *      As with other CRUD methods, you can delete a single document
//    *      or all documents that match a specified filter. To delete all
//    *      of the documents in a collection, pass an empty filter to
//    *      the DeleteMany() method. In this example, we'll delete two of
//    *      the recipes.
//    */

//   //   const deleteQuery = { name: { $in: ['elotes', 'fried rice'] } };
//   //   try {
//   //     const deleteResult = await collection.deleteMany(deleteQuery);
//   //     console.log(`Deleted ${deleteResult.deletedCount} documents\n`);
//   //   } catch (err) {
//   //     console.error(`Something went wrong trying to delete documents: ${err}\n`);
//   //   }

//   //   // Make sure to call close() on your client to perform cleanup operations
//   //   await client.close();
// }
// run().catch(console.dir);
