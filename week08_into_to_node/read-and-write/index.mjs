import { access, writeFile, mkdir, unlink } from 'fs/promises';
import { join } from 'path';

const createFileWithMessage = async (message) => {
    try {
        const now = new Date();
        const year = now.toLocaleString('default', { year: 'numeric' });
        const month = now.toLocaleString('default', { month: '2-digit' });
        const day = now.toLocaleString('default', { day: '2-digit' });

        const dirName = `${year}-${month}-${day}`;

        const fileName =
            now.toTimeString().slice(0, 8).replaceAll(':', '-') + '.txt';

        try {
            await access(dirName);
            console.log(`${dirName} exists`);
        } catch (error) {
            await mkdir(dirName);
            console.log(`${dirName} created`);
        }
        const filePath = join(dirName, fileName);
        await writeFile(filePath, message);
    } catch (error) {
        console.error(error);
    }
};

const deleteFileByName = async (filePath) => {
    try {
        await unlink(filePath);
        console.log(`Successfully deleted ${filePath}`);
    } catch (error) {
        console.error('Something went wrong', error);
    }
};

const command = process.argv[2];
const argument = process.argv[3];

if (command === 'create') {
    createFileWithMessage(argument);
} else if (command === 'delete') {
    deleteFileByName(argument);
} else {
    console.log('Invalid command or argument');
}
