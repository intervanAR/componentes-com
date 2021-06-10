import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import { nodeResolve } from "@rollup/plugin-node-resolve";
//import scss from "rollup-plugin-scss";
import pkg from "./package.json";
import copy from "rollup-plugin-copy-assets";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import postcss from "rollup-plugin-postcss";

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    image(),
    postcss({
      extensions: [".css", ".sass"],
    }),
    nodeResolve({
      extensions: [".js", ".jsx"],
    }),
    external(),
    babel({
      presets: ["@babel/preset-react"],
      exclude: "node_modules/**",
    }),
    commonjs(),
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
