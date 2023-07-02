import axios from 'axios'

const dir= axios.create({
    baseURL: 'http://127.0.0.1:8000/forUnsa/'
})

export const getAll = (ent) => {
    return dir.get(`${ent}/`);
}

export const getOnly = (ent,id) => {
    return dir.get(`post/${id}`);
}

export const create = (ent, id) => {
    return dir.post('post/', id);
}

export const update = (ent,id, post) =>{
    return dir.put(`post/${id}/`, post)
}

export const deletePost = (ent, id) =>{
    
}