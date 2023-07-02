import axios from 'axios'

const dir= axios.create({
    baseURL: 'http://127.0.0.1:8000/forUnsa/'
})

export const getAllPosts = () => {
    return dir.get('post/');
}

export const getPost = (id) => {
    return dir.get(`post/${id}`);
}

export const createPosts = (id) => {
    return dir.post('post/', id);
}

export const updatePost = (id, post) =>{
    return dir.put(`post/${id}/`, post)
}

export const deletePost = (id) =>{
    
}