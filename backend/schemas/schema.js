import createSchema from "part:@sanity/base/schema-creator";

import schemaTypes from "all:part:@sanity/base/schema-type";
import creations from "./creations";
import abouts from "./abouts";
import skills from "./skills";
import school from "./school";
import education from "./education";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([creations, abouts, skills, school, education]),
});
