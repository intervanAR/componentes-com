import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import scss from "rollup-plugin-scss";
import pkg from "./package.json";
import copy from "rollup-plugin-copy-assets";

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    external(),
    nodeResolve({
      extensions: [".js", ".jsx"],
    }),
    babel({
      presets: ["@babel/preset-react"],
      exclude: "node_modules/**",
    }),
    del({ targets: ["dist/*"] }),
    copy({
      assets: [
        // You can include directories
        "src/assets",
      ],
    }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
