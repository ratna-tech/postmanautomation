app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());

app.use('/api', require('./api'));

// Important later!  This exports the app object as a module.
// This comes into play when we deploy the application to
// Cloud Functions.
module.exports = app;


