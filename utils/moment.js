import fs from 'fs';
import path from 'path';
import imageSize from 'image-size';

const PUBLIC_PATH = path.join(process.cwd(), 'public');

export const MOMENTS_PATH = path.join(PUBLIC_PATH, 'moments');

export const momentFilePaths = fs.readdirSync(MOMENTS_PATH).filter((path) => /\.(jpg|png)?$/.test(path));

export const sortMomentsByDate = (moments) => {
  return moments.sort((a, b) => {
    const aDate = new Date(a.update);
    const bDate = new Date(b.update);
    return bDate - aDate;
  });
};

export const getMoments = () => {
  const moments = momentFilePaths.map((name) => {
    const fullpath = path.join(MOMENTS_PATH, name);
    const stat = fs.statSync(fullpath);
    const filepath = `/moments/${name}`;
    const update = stat.ctime;
    const { width, height } = imageSize(fullpath);

    return {
      filepath,
      name: name.replace(path.extname(name), ''),
      update: update.toLocaleDateString(),
      width,
      height,
    };
  });

  return sortMomentsByDate(moments);
};