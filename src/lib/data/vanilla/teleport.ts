import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The teleport command */
export const teleport: CommandInfo[] = [
  {
    name: "teleport",
    documentation: "Teleports entities (players, mobs, etc.).",
    permission_level: 1,
    parameters: [
      { text: "teleport", type: ParameterType.keyword, required: true },
      { text: "destination", type: ParameterType.selector, required: true },
    ],
  },
  {
    name: "teleport",
    documentation: "Teleports entities (players, mobs, etc.).",
    permission_level: 1,
    parameters: [
      { text: "teleport", type: ParameterType.keyword, required: true },
      { text: "destination x", type: ParameterType.coordinate, required: true },
      { text: "destination y", type: ParameterType.coordinate, required: true },
      { text: "destination z", type: ParameterType.coordinate, required: true },
      { text: "checkForBlocks", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "teleport",
    documentation: "Teleports entities (players, mobs, etc.).",
    permission_level: 1,
    parameters: [
      { text: "teleport", type: ParameterType.keyword, required: true },
      { text: "destination x", type: ParameterType.coordinate, required: true },
      { text: "destination y", type: ParameterType.coordinate, required: true },
      { text: "destination z", type: ParameterType.coordinate, required: true },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "lookAtEntity", type: ParameterType.selector, required: true },
      { text: "checkForBlocks", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "teleport",
    documentation: "Teleports entities (players, mobs, etc.).",
    permission_level: 1,
    parameters: [
      { text: "teleport", type: ParameterType.keyword, required: true },
      { text: "destination x", type: ParameterType.coordinate, required: true },
      { text: "destination y", type: ParameterType.coordinate, required: true },
      { text: "destination z", type: ParameterType.coordinate, required: true },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "lookAtPosition x", type: ParameterType.coordinate, required: true },
      { text: "lookAtPosition y", type: ParameterType.coordinate, required: true },
      { text: "lookAtPosition z", type: ParameterType.coordinate, required: true },
      { text: "checkForBlocks", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "teleport",
    documentation: "Teleports entities (players, mobs, etc.).",
    permission_level: 1,
    parameters: [
      { text: "teleport", type: ParameterType.keyword, required: true },
      { text: "destination x", type: ParameterType.coordinate, required: true },
      { text: "destination y", type: ParameterType.coordinate, required: true },
      { text: "destination z", type: ParameterType.coordinate, required: true },
      { text: "yRot", type: ParameterType.rotation, required: false },
      { text: "xRot", type: ParameterType.rotation, required: false },
      { text: "checkForBlocks", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "teleport",
    documentation: "Teleports entities (players, mobs, etc.).",
    permission_level: 1,
    parameters: [
      { text: "teleport", type: ParameterType.keyword, required: true },
      { text: "victim", type: ParameterType.selector, required: true },
      { text: "destination", type: ParameterType.selector, required: true },
      { text: "checkForBlocks", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "teleport",
    documentation: "Teleports entities (players, mobs, etc.).",
    permission_level: 1,
    parameters: [
      { text: "teleport", type: ParameterType.keyword, required: true },
      { text: "victim", type: ParameterType.selector, required: true },
      { text: "destination x", type: ParameterType.coordinate, required: true },
      { text: "destination y", type: ParameterType.coordinate, required: true },
      { text: "destination z", type: ParameterType.coordinate, required: true },
      { text: "checkForBlocks", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "teleport",
    documentation: "Teleports entities (players, mobs, etc.).",
    permission_level: 1,
    parameters: [
      { text: "teleport", type: ParameterType.keyword, required: true },
      { text: "victim", type: ParameterType.selector, required: true },
      { text: "destination x", type: ParameterType.coordinate, required: true },
      { text: "destination y", type: ParameterType.coordinate, required: true },
      { text: "destination z", type: ParameterType.coordinate, required: true },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "lookAtEntity", type: ParameterType.selector, required: true },
      { text: "checkForBlocks", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "teleport",
    documentation: "Teleports entities (players, mobs, etc.).",
    permission_level: 1,
    parameters: [
      { text: "teleport", type: ParameterType.keyword, required: true },
      { text: "victim", type: ParameterType.selector, required: true },
      { text: "destination x", type: ParameterType.coordinate, required: true },
      { text: "destination y", type: ParameterType.coordinate, required: true },
      { text: "destination z", type: ParameterType.coordinate, required: true },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "lookAtPosition x", type: ParameterType.coordinate, required: true },
      { text: "lookAtPosition y", type: ParameterType.coordinate, required: true },
      { text: "lookAtPosition z", type: ParameterType.coordinate, required: true },
      { text: "checkForBlocks", type: ParameterType.boolean, required: false },
    ],
  },
  {
    name: "teleport",
    documentation: "Teleports entities (players, mobs, etc.).",
    permission_level: 1,
    parameters: [
      { text: "teleport", type: ParameterType.keyword, required: true },
      { text: "victim", type: ParameterType.selector, required: true },
      { text: "destination x", type: ParameterType.coordinate, required: true },
      { text: "destination y", type: ParameterType.coordinate, required: true },
      { text: "destination z", type: ParameterType.coordinate, required: true },
      { text: "yRot", type: ParameterType.rotation, required: false },
      { text: "xRot", type: ParameterType.rotation, required: false },
      { text: "checkForBlocks", type: ParameterType.boolean, required: false },
    ],
  },
];