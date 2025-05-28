const fs = require('fs-extra');

async function moveFiles() {
    try {
        await fs.move('site', '.', { overwrite: true });
        console.log('Moved LWR build files to root.');
    } catch (err) {
        console.error('Error moving files:', err);
    }
}

moveFiles();