# Cloudcut

Cut long videos into equal parts, right in the browser. Drop a video, pick a length (say 3:59), and get every part, one by one or as a zip. Nothing is uploaded: the cutting runs on the visitor's own device with ffmpeg compiled to WebAssembly, and parts are stream-copied, so there's no quality loss.

Built by Favour ([@Favour_D_Crier](https://x.com/Favour_D_Crier)).

## Files

- `index.html`: the whole site (markup, styles, script)
- `worker.js`: runs the ffmpeg engine off the main thread
