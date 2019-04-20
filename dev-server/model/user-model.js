import mongoose from 'mongoose';
import s from 'underscore.string';

const userSchema = new mongoose.Schema({
    username: String,
    first: String,
    last: String,
    password: String    
});

userSchema.set('timestamps', true);

userSchema.virtual('fullName').get(function(){
    const first = s.capitalize(this.first.toLowerCase());
    const last = s.capitalize(this.last);
    return `${first}  ${last}`;
})

userSchema.pre('save', function(next){
    this.username = this.username.toLowerCase();
    this.first = this.first.toLowerCase();
    this.last = this.last.toLowerCase();
    next();
});

export default mongoose.model('user', userSchema);


