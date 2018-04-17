const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ActorSchema = new Schema({
    name: { type: String },
    name_cn: { type: String },
    images: {
        large: { type: String },
        medium: { type: String },
        small: { type: String },
        grid: { type: String },
    },
    info: { type: Schema.Types.Mixed },
    update_time: { type: Date, default: Date.now },
    views: { type: Number, default: 0 }
});

ActorSchema.index({ name: 1 });
ActorSchema.index({ name_cn: 1 });

ActorSchema.pre('save', (next) => {
    let now = new Date();
    this.update_time = now;
    next();
});

mongoose.model('Actor', ActorSchema);