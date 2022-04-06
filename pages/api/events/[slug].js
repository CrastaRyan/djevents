const { events } = require("./data.json");


export default function handler(req, res) {
  events.forEach((element) => {
    if (element.slug === req.query.slug) {
      res.status(200).json(element);
    }
  });
  res.status(404).json({
    message: "event with slug not found",
  });
}
