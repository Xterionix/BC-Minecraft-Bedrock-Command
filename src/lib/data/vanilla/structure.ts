import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The structure command */
export const structure: CommandInfo[] = [
  {
    name: "structure",
    documentation: "Saves or loads a structure in the world.",
    permission_level: 1,
    parameters: [
      { text: "structure", type: ParameterType.keyword, required: true },
      { text: "delete", type: ParameterType.keyword, required: true },
      { text: "name", type: ParameterType.structure, required: true },
    ],
  },
  {
    name: "structure",
    documentation: "Saves or loads a structure in the world.",
    permission_level: 1,
    parameters: [
      { text: "structure", type: ParameterType.keyword, required: true },
      { text: "load", type: ParameterType.keyword, required: true },
      { text: "name", type: ParameterType.structure, required: true },
      { text: "to x", type: ParameterType.coordinate, required: true },
      { text: "to y", type: ParameterType.coordinate, required: true },
      { text: "to z", type: ParameterType.coordinate, required: true },
      { text: "rotation yaw", type: ParameterType.rotation, required: false },
      { text: "rotation pitch", type: ParameterType.rotation, required: false },
      { text: "mirror", type: ParameterType.mirror, required: false },
      { text: "animationMode", type: ParameterType.structureAnimationMode, required: false },
      { text: "animationSeconds", type: ParameterType.float, required: false },
      { text: "includeEntities", type: ParameterType.boolean, required: false },
      { text: "includeBlocks", type: ParameterType.boolean, required: false },
      { text: "waterlogged", type: ParameterType.boolean, required: false },
      { text: "integrity", type: ParameterType.float, required: false },
      { text: "seed", type: ParameterType.string, required: false },
    ],
  },
  {
    name: "structure",
    documentation: "Saves or loads a structure in the world.",
    permission_level: 1,
    parameters: [
      { text: "structure", type: ParameterType.keyword, required: true },
      { text: "load", type: ParameterType.keyword, required: true },
      { text: "name", type: ParameterType.structure, required: true },
      { text: "to x", type: ParameterType.coordinate, required: true },
      { text: "to y", type: ParameterType.coordinate, required: true },
      { text: "to z", type: ParameterType.coordinate, required: true },
      { text: "rotation", type: ParameterType.rotation, required: false },
      { text: "mirror", type: ParameterType.mirror, required: false },
      { text: "includeEntities", type: ParameterType.boolean, required: false },
      { text: "includeBlocks", type: ParameterType.boolean, required: false },
      { text: "waterlogged", type: ParameterType.boolean, required: false },
      { text: "integrity", type: ParameterType.float, required: false },
      { text: "seed", type: ParameterType.string, required: false },
    ],
  },
  {
    name: "structure",
    documentation: "Saves or loads a structure in the world.",
    permission_level: 1,
    parameters: [
      { text: "structure", type: ParameterType.keyword, required: true },
      { text: "save", type: ParameterType.keyword, required: true },
      { text: "name", type: ParameterType.structure, required: true },
      { text: "from x", type: ParameterType.coordinate, required: true },
      { text: "from y", type: ParameterType.coordinate, required: true },
      { text: "from z", type: ParameterType.coordinate, required: true },
      { text: "to x", type: ParameterType.coordinate, required: true },
      { text: "to y", type: ParameterType.coordinate, required: true },
      { text: "to z", type: ParameterType.coordinate, required: true },
      { text: "includeEntities", type: ParameterType.boolean, required: false },
      { text: "saveMode", type: ParameterType.saveMode, required: false },
      { text: "includeBlocks", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "structure",
    documentation: "Saves or loads a structure in the world.",
    permission_level: 1,
    parameters: [
      { text: "structure", type: ParameterType.keyword, required: true },
      { text: "save", type: ParameterType.keyword, required: true },
      { text: "name", type: ParameterType.structure, required: true },
      { text: "from x", type: ParameterType.coordinate, required: true },
      { text: "from y", type: ParameterType.coordinate, required: true },
      { text: "from z", type: ParameterType.coordinate, required: true },
      { text: "to x", type: ParameterType.coordinate, required: true },
      { text: "to y", type: ParameterType.coordinate, required: true },
      { text: "to z", type: ParameterType.coordinate, required: true },
      { text: "saveMode", type: ParameterType.saveMode, required: false },
    ],
  },
];