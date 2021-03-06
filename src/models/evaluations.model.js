// evaluations-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const evaluations = new Schema({
    day: { type: Date, required: true },
    grade: { type: Number, required: true },
    remarks: { type: String },
    studentId: { type: Schema.Types.ObjectId, ref: 'students' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('evaluations', evaluations);
};
