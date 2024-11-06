// import dbConnect from "../../../lib/dbConnect";
// import Event from "../../../models/Event";

// export default async function handler(req, res) {
//   await dbConnect();

//   switch (req.method) {
//     case "POST":
//       try {
//         const event = await Event.create(req.body);
//         res.status(201).json({ success: true, data: event });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     case "GET":
//       try {
//         const events = await Event.find({});
//         res.status(200).json({ success: true, data: events });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;
//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// }
