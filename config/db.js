const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://riteshraghuwanshi2001:AfxerEUkGomOunqO@cluster0.z4srsco.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
 {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
)
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

module.exports = mongoose;
// AfxerEUkGomOunqO
