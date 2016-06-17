import webpack from "webpack";
import path from "path";

const root = path.join(__dirname, "dist");
const src = path.join(root, "blind");

export default {
    entry: path.join(root, "es6/entry.js6"),
    output: {
        path: path.join(src, "js"),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                loader: 'babel',
                include: path.join(root, "es6"),
                test: /\.js6$/,
                exclude: /node_modules/,
                query: {
                  plugins: ['transform-runtime'],
                  presets: ['es2015', 'stage-0', 'react']
                }
            }
        ]
    },
    plugins: [
        // Avoid publishing files when compilation fails
        new webpack.NoErrorsPlugin()
    ],
    resolve: {
      root: [
        path.join(__dirname, "node_modules"),
        path.join(root, "es6")
      ],
      modulesDirectories: ['node_modules'],
      // Allow to omit extensions when requiring these files
      extensions: ["", ".js", ".jsx", ".js6"],
    }
};
