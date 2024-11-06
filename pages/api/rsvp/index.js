// import dbConnect from "../../../lib/dbConnect";
// import RSVP from "../../../models/RSVP";

// export default async function handler(req, res) {
//   await dbConnect();

//   if (req.method === "POST") {
//     try {
//       const rsvp = await RSVP.create(req.body);
//       res.status(201).json({ success: true, data: rsvp });
//     } catch (error) {
//       res.status(400).json({ success: false });
//     }
//   }
// }
