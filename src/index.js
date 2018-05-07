import dva from 'dva';
import './index.css';

// const dva = require('dva');
// require('./index.css');

// 1. Initialize
const app = dva({
     initialState: {
     products: [
         { name: 'dva', id: 1 },
         { name: 'antd', id: 2 },
       ],
     },
 });

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/products').default);
app.model(require('./models/count').default);
app.model(require('./models/users').default);
app.model(require('./models/demo').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');

export default app._store;
// module.exports = app._store;
// module.exports = app;
