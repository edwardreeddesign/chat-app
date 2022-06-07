import logger from "pino";

import dayjs from "dayjs";
import { join } from "path";

const log = logger({
  prettifier: true,
  base: {
    pid: false,
  },
  timestamp: () => `,"time": "${dayjs().format("MM / DD / YYYY")}"`,
});

export default log;
