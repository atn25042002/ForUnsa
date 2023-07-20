import axios from 'axios'

const dir= axios.create({
    baseURL: 'http://127.0.0.1:8000/forUnsa/'
})

const dir2= axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})

export const getAll = (ent) => {
    return dir.get(`${ent}/`);
}

export const getOnly = (ent,id) => {
    return dir.get(`${ent}/${id}`);
}

export const create = (ent, element) => {
    return dir.post(`${ent}/`, element);
}

export const update = (ent,id, element) =>{
    return dir.put(`${ent}/${id}/`, element);
}

export const subirImagen = (ent, element) =>{
    return dir2.post(`media/`, element);
}