import { ParameterType } from "../../types/parameter-type";
import { CommandInfo } from "../command-info";

/**The camera command */
export const camera: CommandInfo[] = [
  {
    name: "camera",
    documentation: "Clears the camera settings on the selected players.",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "clear", type: ParameterType.keyword, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "fade", type: ParameterType.keyword, required: true },
      { text: "color", type: ParameterType.keyword, required: true },
      { text: "red", type: ParameterType.integer, required: true, options: { minimum: 0, maximum: 255 } },
      { text: "green", type: ParameterType.integer, required: true, options: { minimum: 0, maximum: 255 } },
      { text: "blue", type: ParameterType.integer, required: true, options: { minimum: 0, maximum: 255 } },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "fade", type: ParameterType.keyword, required: true },
      { text: "time", type: ParameterType.keyword, required: true },
      { text: "fadeInSeconds", type: ParameterType.float, required: true },
      { text: "holdSeconds", type: ParameterType.float, required: true },
      { text: "fadeOutSeconds", type: ParameterType.float, required: true },
      { text: "color", type: ParameterType.keyword, required: true },
      { text: "red", type: ParameterType.integer, required: true, options: { minimum: 0, maximum: 255 } },
      { text: "green", type: ParameterType.integer, required: true, options: { minimum: 0, maximum: 255 } },
      { text: "blue", type: ParameterType.integer, required: true, options: { minimum: 0, maximum: 255 } },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "fade", type: ParameterType.keyword, required: true },
      { text: "time", type: ParameterType.keyword, required: true },
      { text: "fadeInSeconds", type: ParameterType.float, required: true },
      { text: "holdSeconds", type: ParameterType.float, required: true },
      { text: "fadeOutSeconds", type: ParameterType.float, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "fade", type: ParameterType.keyword, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "remove_target", type: ParameterType.keyword, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "default", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "ease", type: ParameterType.keyword, required: true },
      { text: "easeTime", type: ParameterType.float, required: true },
      { text: "easeType", type: ParameterType.easing, required: true },
      { text: "default", type: ParameterType.keyword, required: false },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "ease", type: ParameterType.keyword, required: true },
      { text: "easeTime", type: ParameterType.float, required: true },
      { text: "easeType", type: ParameterType.easing, required: true },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "lookAtEntity", type: ParameterType.selector, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "ease", type: ParameterType.keyword, required: true },
      { text: "easeTime", type: ParameterType.float, required: true },
      { text: "easeType", type: ParameterType.easing, required: true },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "lookAtPosition x", type: ParameterType.coordinate, required: true },
      { text: "lookAtPosition y", type: ParameterType.coordinate, required: true },
      { text: "lookAtPosition z", type: ParameterType.coordinate, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "ease", type: ParameterType.keyword, required: true },
      { text: "easeTime", type: ParameterType.float, required: true },
      { text: "easeType", type: ParameterType.easing, required: true },
      { text: "pos", type: ParameterType.keyword, required: true },
      { text: "position x", type: ParameterType.coordinate, required: true },
      { text: "position y", type: ParameterType.coordinate, required: true },
      { text: "position z", type: ParameterType.coordinate, required: true },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "lookAtEntity", type: ParameterType.selector, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "ease", type: ParameterType.keyword, required: true },
      { text: "easeTime", type: ParameterType.float, required: true },
      { text: "easeType", type: ParameterType.easing, required: true },
      { text: "pos", type: ParameterType.keyword, required: true },
      { text: "position x", type: ParameterType.coordinate, required: true },
      { text: "position y", type: ParameterType.coordinate, required: true },
      { text: "position z", type: ParameterType.coordinate, required: true },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "lookAtPosition x", type: ParameterType.coordinate, required: true },
      { text: "lookAtPosition y", type: ParameterType.coordinate, required: true },
      { text: "lookAtPosition z", type: ParameterType.coordinate, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "ease", type: ParameterType.keyword, required: true },
      { text: "easeTime", type: ParameterType.float, required: true },
      { text: "easeType", type: ParameterType.easing, required: true },
      { text: "pos", type: ParameterType.keyword, required: true },
      { text: "position x", type: ParameterType.coordinate, required: true },
      { text: "position y", type: ParameterType.coordinate, required: true },
      { text: "position z", type: ParameterType.coordinate, required: true },
      { text: "rot yaw", type: ParameterType.rotation, required: true },
      { text: "rot pitch", type: ParameterType.rotation, required: true },
      { text: "xRot", type: ParameterType.rotation, required: true },
      { text: "yRot", type: ParameterType.rotation, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "ease", type: ParameterType.keyword, required: true },
      { text: "easeTime", type: ParameterType.float, required: true },
      { text: "easeType", type: ParameterType.easing, required: true },
      { text: "pos", type: ParameterType.keyword, required: true },
      { text: "position x", type: ParameterType.coordinate, required: true },
      { text: "position y", type: ParameterType.coordinate, required: true },
      { text: "position z", type: ParameterType.coordinate, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "ease", type: ParameterType.keyword, required: true },
      { text: "easeTime", type: ParameterType.float, required: true },
      { text: "easeType", type: ParameterType.easing, required: true },
      { text: "rot yaw", type: ParameterType.rotation, required: true },
      { text: "rot pitch", type: ParameterType.rotation, required: true },
      { text: "xRot", type: ParameterType.rotation, required: true },
      { text: "yRot", type: ParameterType.rotation, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "entity_offset", type: ParameterType.keyword, required: true },
      { text: "xEntityOffset", type: ParameterType.float, required: true },
      { text: "yEntityOffset", type: ParameterType.float, required: true },
      { text: "zEntityOffset", type: ParameterType.float, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "lookAtEntity", type: ParameterType.selector, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "lookAtPosition x", type: ParameterType.coordinate, required: true },
      { text: "lookAtPosition y", type: ParameterType.coordinate, required: true },
      { text: "lookAtPosition z", type: ParameterType.coordinate, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "pos", type: ParameterType.keyword, required: true },
      { text: "position x", type: ParameterType.coordinate, required: true },
      { text: "position y", type: ParameterType.coordinate, required: true },
      { text: "position z", type: ParameterType.coordinate, required: true },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "lookAtEntity", type: ParameterType.selector, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "pos", type: ParameterType.keyword, required: true },
      { text: "position x", type: ParameterType.coordinate, required: true },
      { text: "position y", type: ParameterType.coordinate, required: true },
      { text: "position z", type: ParameterType.coordinate, required: true },
      { text: "facing", type: ParameterType.keyword, required: true },
      { text: "lookAtPosition x", type: ParameterType.coordinate, required: true },
      { text: "lookAtPosition y", type: ParameterType.coordinate, required: true },
      { text: "lookAtPosition z", type: ParameterType.coordinate, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "pos", type: ParameterType.keyword, required: true },
      { text: "position x", type: ParameterType.coordinate, required: true },
      { text: "position y", type: ParameterType.coordinate, required: true },
      { text: "position z", type: ParameterType.coordinate, required: true },
      { text: "rot yaw", type: ParameterType.rotation, required: true },
      { text: "rot pitch", type: ParameterType.rotation, required: true },
      { text: "xRot", type: ParameterType.rotation, required: true },
      { text: "yRot", type: ParameterType.rotation, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "pos", type: ParameterType.keyword, required: true },
      { text: "position x", type: ParameterType.coordinate, required: true },
      { text: "position y", type: ParameterType.coordinate, required: true },
      { text: "position z", type: ParameterType.coordinate, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "rot yaw", type: ParameterType.rotation, required: true },
      { text: "rot pitch", type: ParameterType.rotation, required: true },
      { text: "xRot", type: ParameterType.rotation, required: true },
      { text: "yRot", type: ParameterType.rotation, required: true },
      { text: "entity_offset", type: ParameterType.keyword, required: true },
      { text: "xEntityOffset", type: ParameterType.float, required: true },
      { text: "yEntityOffset", type: ParameterType.float, required: true },
      { text: "zEntityOffset", type: ParameterType.float, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "rot yaw", type: ParameterType.rotation, required: true },
      { text: "rot pitch", type: ParameterType.rotation, required: true },
      { text: "xRot", type: ParameterType.rotation, required: true },
      { text: "yRot", type: ParameterType.rotation, required: true },
      { text: "view_offset", type: ParameterType.keyword, required: true },
      { text: "xViewOffset", type: ParameterType.float, required: true },
      { text: "yViewOffset", type: ParameterType.float, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "rot yaw", type: ParameterType.rotation, required: true },
      { text: "rot pitch", type: ParameterType.rotation, required: true },
      { text: "xRot", type: ParameterType.rotation, required: true },
      { text: "yRot", type: ParameterType.rotation, required: true },
      { text: "view_offset", type: ParameterType.keyword, required: true },
      { text: "xViewOffset", type: ParameterType.float, required: true },
      { text: "yViewOffset", type: ParameterType.float, required: true },
      { text: "entity_offset", type: ParameterType.keyword, required: true },
      { text: "xEntityOffset", type: ParameterType.float, required: true },
      { text: "yEntityOffset", type: ParameterType.float, required: true },
      { text: "zEntityOffset", type: ParameterType.float, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "rot yaw", type: ParameterType.rotation, required: true },
      { text: "rot pitch", type: ParameterType.rotation, required: true },
      { text: "xRot", type: ParameterType.rotation, required: true },
      { text: "yRot", type: ParameterType.rotation, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "view_offset", type: ParameterType.keyword, required: true },
      { text: "xViewOffset", type: ParameterType.float, required: true },
      { text: "yViewOffset", type: ParameterType.float, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "set", type: ParameterType.keyword, required: true },
      { text: "preset", type: ParameterType.cameraPresets, required: true },
      { text: "view_offset", type: ParameterType.keyword, required: true },
      { text: "xViewOffset", type: ParameterType.float, required: true },
      { text: "yViewOffset", type: ParameterType.float, required: true },
      { text: "entity_offset", type: ParameterType.keyword, required: true },
      { text: "xEntityOffset", type: ParameterType.float, required: true },
      { text: "yEntityOffset", type: ParameterType.float, required: true },
      { text: "zEntityOffset", type: ParameterType.float, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "target_entity", type: ParameterType.keyword, required: true },
      { text: "entity", type: ParameterType.selector, required: true },
    ],
  },
  {
    name: "camera",
    documentation: "Issues a camera instruction",
    permission_level: 1,
    parameters: [
      { text: "camera", type: ParameterType.keyword, required: true },
      { text: "players", type: ParameterType.selector, required: true },
      { text: "target_entity", type: ParameterType.keyword, required: true },
      { text: "entity", type: ParameterType.selector, required: true },
      { text: "target_center_offset", type: ParameterType.keyword, required: true },
      { text: "xTargetCenterOffset", type: ParameterType.float, required: true },
      { text: "yTargetCenterOffset", type: ParameterType.float, required: true },
      { text: "zTargetCenterOffset", type: ParameterType.float, required: true },
    ],
  },
];