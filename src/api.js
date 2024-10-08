import axios from 'axios';

const api = axios.create({
    baseURL: 'https://nc-news-53nl.onrender.com/api'
});

export const fetchArticlesByTopic = (topic) => {
    return api.get('/articles', { params: { topic } })
        .then((response) => {
            return response.data.articles;
        })
        .catch((error) => {
            throw error;
        })
};

export const fetchArticlesBySortBy = (sort_by) => {
    return api.get('/articles', { params: { sort_by } })
        .then((response) => {
            return response.data.articles;
        })
        .catch((error) => {
            throw error;
        })
}

export const fetchAllUsers = () => {
    return api.get('/users')
        .then((response) => {
            return response.data.rows;
        })
        .catch((error) => {
            throw error;
        })
}

export const deleteCommentByCommentId = (comment_id) => {
    return api.delete(`/comments/${comment_id}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        })
}

export const fetchArticles = () => {
    return api.get('/articles')
        .then((response) => {
            return response.data.articles;
        })
        .catch((error) => {
            throw error;
        })
};

export const fetchArticleById = (article_id) => {
    return api.get(`/articles/${article_id}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        })
};

export const fetchCommentsByArticleId = (article_id) => {
    return api.get(`/articles/${article_id}/comments`)
        .then((response) => {
            return response.data.comments;
        })
        .catch((error) => {
            throw error;
        })
};

export const fetchUsers = () => {
    return api.get('/users')
        .then((response) => {
            console.log(response)
            return response.data.rows;
        })
        .catch((error) => {
            throw error;
        })
}