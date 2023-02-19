import { rest } from "msw";
const apiUrl = process.env.REACT_APP_API_URL!;

export const handlers = [
  rest.get(apiUrl, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 2,
        name: "",
        creation: "",
        endurance: 5,
        speed: 10,
      })
    );
  }),
];

export const errorHandlers = [
  rest.get(apiUrl, (req, res, ctx) => {
    return res(ctx.status(404));
  }),
];
