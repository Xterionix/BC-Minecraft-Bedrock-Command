import { ParameterType } from "../../Types/ParameterType";
import { CommandInfo } from "../CommandInfo";

/**The particle command */
export const particle: CommandInfo[] = [
  {
    name: "particle",
    documentation: "Creates particles.",
    parameters: [
      { text: "particle", type: ParameterType.keyword, required: true },
      { text: "effect", type: ParameterType.particle, required: true },
      { text: "position x", type: ParameterType.coordinate, required: false },
      { text: "position y", type: ParameterType.coordinate, required: false },
      { text: "position z", type: ParameterType.coordinate, required: false },
    ],
  },
];