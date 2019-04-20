import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
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

/* static methods */
userSchema.statics.passwordMatches = function(password, hash) {
    return bcrypt.compareSync(password,hash);
}

userSchema.pre('save', function(next){
    this.username = this.username.toLowerCase();
    this.first = this.first.toLowerCase();
    this.last = this.last.toLowerCase();
    const unsafepassword = this.password;
    this.password = bcrypt.hashSync(unsafepassword);
    next();
});

export default mongoose.model('user', userSchema);


