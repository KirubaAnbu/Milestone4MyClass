const express =require('express');
const app = express();
const userRouter = require('./routers/users');
app.use(express.json());

app.use('/users', userRouter);

const PORT =process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})