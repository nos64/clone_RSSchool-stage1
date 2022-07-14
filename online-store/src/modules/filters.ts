import {dataBase} from '../../src/db/db';

const brandSet: Set<string> = new Set(); 
dataBase.forEach(item => brandSet.add(item.brand));
const brandArray = Array.from(brandSet);

const colorSet: Set<string> = new Set(); 
dataBase.forEach(item => colorSet.add(item.colorID));
const colorArray = Array.from(colorSet);

const yearSet: Set<string> = new Set(); 
dataBase.forEach(item => yearSet.add(item.year));
const yearArray = Array.from(yearSet);

const volumeSet: Set<string> = new Set(); 
dataBase.forEach(item => volumeSet.add(item.volume));
const volumeArray = Array.from(volumeSet);