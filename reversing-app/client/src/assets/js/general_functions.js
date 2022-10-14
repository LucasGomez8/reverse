export const _remove = (users, id) => {
        return users.filter(x => x.user_id != id);
}


export const _find = (id, values) => {
        return values.filter( x => x.user_id == id);
}
