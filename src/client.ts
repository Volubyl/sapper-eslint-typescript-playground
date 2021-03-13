/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import * as sapper from "@sapper/app";
await sapper.start({
  target: document.querySelector("#sapper") as Node,
});
