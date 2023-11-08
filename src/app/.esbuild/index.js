const esbuild = require("esbuild");
const { htmlPlugin } = require('@craftamap/esbuild-plugin-html');

esbuild.build({
    entryPoints: ['./bundle.jsx'], // Called from package.json
    bundle: true,
    metafile: true,
    sourcemap: true,
    // logLevel: 'verbose',
    // outfile: 'build/bundle.js',
    outdir: 'build',
    // platform: 'node',
    // format: 'esm',
    format: 'cjs',
    loader: {
        '.ejs': 'text',
        '.js': 'jsx',
        '.pcss': 'empty',
        '.css': 'empty',
        '.png': 'empty'
    },
    plugins: [
        htmlPlugin({
            files: [
                {
                    entryPoints: [
                        'index.jsx',
                    ],
                    filename: 'index.html',
                    htmlTemplate: `
						<!DOCTYPE html>
						<html lang="en">
						<head>
							<meta charset="UTF-8">
							<meta name="viewport" content="width=device-width, initial-scale=1.0">
							<script defer src="bundle.js"></script>
						</head>
						<body>
							<div id="root">
							</div>
						</body>
						</html>
                    `,
                },
            ]
        })
    ],
})
.then(() => console.log("⚡ Compiled."))
.catch(e => {
    console.error(e);
    return process.exit(1);
});