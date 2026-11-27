// Cloudcut engine worker. Runs ffmpeg (WebAssembly) off the main thread.
let ff = null;

self.onmessage = async ({ data: msg }) => {
  const { id, type, data } = msg;
  try {
    let res = true, transfer = [];
    switch (type) {
      case 'load': {
        const mod = await import(data.coreURL);
        const create = mod.default;
        ff = await create({
          mainScriptUrlOrBlob: `${data.coreURL}#${btoa(JSON.stringify({ wasmURL: data.wasmURL }))}`,
        });
        ff.setLogger((d) => self.postMessage({ type: 'log', data: d }));
        ff.setProgress((d) => self.postMessage({ type: 'progress', data: d }));
        break;
      }
      case 'mount': {
        try { ff.FS.mkdir(data.dir); } catch (e) {}
        ff.FS.mount(ff.FS.filesystems.WORKERFS, { files: [data.file] }, data.dir);
        break;
      }
      case 'unmount': {
        try { ff.FS.unmount(data.dir); } catch (e) {}
        break;
      }
      case 'exec': {
        ff.setTimeout(-1);
        ff.exec(...data.args);
        res = ff.ret;
        ff.reset();
        break;
      }
      case 'read': {
        res = ff.FS.readFile(data.path);
        transfer = [res.buffer];
        break;
      }
      case 'rm': {
        try { ff.FS.unlink(data.path); } catch (e) {}
        break;
      }
      default:
        throw new Error('unknown message ' + type);
    }
    self.postMessage({ id, type: 'ok', data: res }, transfer);
  } catch (err) {
    self.postMessage({ id, type: 'error', data: String((err && err.message) || err) });
  }
};
