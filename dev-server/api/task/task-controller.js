import moment from 'moment';

import User from '../../model/user-model';
import Task from '../../model/task-model';

import * as auth from '../../services/auth-service';


export function index(req, res){
    // find all task
    Task.find({}, (error, tasks) => {
        if(error){
            return res.status(500).json();
        }
        return res.status(200).json({tasks: tasks});
    }).populate('author', 'username', 'user'); /* other property from user model */
}

export function create(req, res){
    //create task
    const id = auth.getUserId(req);
    
    User.findOne({_id: id}, (error, user) =>{
        if(error && !user){
            return res.status(500).json();
        }

        const task = new Task(req.body.task);
        task.author = user._id;
        task.dueDate = moment(task.dueDate);

        task.save(error => {
            if(error){
                return res.status(500).json({message:"Not able to save task"});
            }
            return res.status(201).json();
        });
    });
}

export function update(req, res){
    //update task
    const id = auth.getUserId(req);
    User.findOne({_id:id}, (error, user) =>{
        if(error){
            return res.status(500).json();
        }
        if(!user){
            return res.status(404).json();
        }

        const task = req.body.task;
        task.author = user._id;
        task.dueDate = moment(req.body.task.dueDate);

        Task.findByIdAndUpdate({_id: task._id}, task, error =>{
            if(error){
                return res.status(500).json();
            }
            return res.status(204).json();
        } );
    } );
}

export function remove(req, res){
    //delete a task
    const id = auth.getUserId(req);
    Task.findOne({_id: req.params.id}, (error, task) =>{
        if(error){
            return res.status(500).json();
        }
        if(!task){
            return res.status(404).json();
        }

        if(task.author._id.toString() !== id){
            return res.status(403).json({message: 'Not allowed to delete another user task'});
        }

        Task.deleteOne({_id: req.params.id}, error =>{
            if(error){
                return req.status(500). json();
            }
            return res.status(204).json();
        });
    });
    
}

export function show(req, res){
    //get task for id
    Task.findOne({_id: req.params.id}, (error, task) =>{
        if(error){
            return res.status(500).json();
        }
        if(!task){
            return res.status(404).json();
        }
        /* todo: add validattion if the task belongs to user */
        return res.status(200).json({task: task});
    });
}
