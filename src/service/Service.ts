export interface Service<T> {
    findAll();

    add(data);

    update(id, data);

    findByStatus(status);

    delete(id);
}
