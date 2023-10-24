import islands from "@zxlabs/hyperapp-extra/islands"
import { app } from "hyperapp"

const sync = islands()
app(
  sync({
    init: [
      { items: [], showing: false },
    ],
  }),
)

export default view => sync({ view })
