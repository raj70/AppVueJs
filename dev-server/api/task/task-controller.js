export function index(req, res){
    // find all task
    return res.status(200).json();
}

export function create(req, res){
    //create task
    return res.status(201).json();
}

export function update(req, res){
    //update task
    return res.status(204).json();
}

export function remove(req, res){
    //delete a task
    return res.status(204).json();
}

export function show(req, res){
    //get task for id
    return res.status(200).json();
}
