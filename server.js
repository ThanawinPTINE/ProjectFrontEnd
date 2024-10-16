const express = require('express');
const axios = require('axios');
const app = express();
const bodyParser = require('body-parser');

// const base_url = 'http://localhost:3000/hopak';
const base_url = 'http://node52725-project-nueaowen.proen.app.ruk-com.cloud/hopak';

app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

app.get("/", (req, res) => {
    res.render("home");
});

//<!-----------------------rooms--------------------------------!>//

app.get('/rooms', async (req, res) => {
    try{
        const response = await axios.get(base_url + '/rooms');
        res.render('rooms', {rooms: response.data});
    }catch(err){
        console.error(err);
        res.status(500).send("Error");
    }
});

app.get('/room/:id', async (req, res) => {
    try{
        const response = await axios.get(base_url + '/rooms/' + req.params.id);
        res.render('room', {room: response.data});
    }catch(err){
        console.error(err);
        res.status(500).send("Error");
    }
});

app.get("/create1", (req, res) => {
    res.render("create1");
});

app.post("/create1", async (req, res) => {
    try{
        const data = {name: req.body.name};
        await axios.post(base_url + '/rooms', data);
        res.redirect('/rooms');
    }catch(err){
        console.error(err);
        res.status(500).send("Error");
    }
});

app.get("/update1/:id", async (req, res) => {
    try{
        const response = await axios.get(
        base_url + '/rooms/' + req.params.id);
        res.render("update1", {room: response.data});
    }catch(err){
        console.error(err);
        res.status(500).send("Error");
    }
});

app.post("/update1/:id", async (req, res) => {
    try{
        const data = {name: req.body.name};
        await axios.put(base_url + '/rooms/' + req.params.id, data);
        res.redirect('/rooms');
    } catch(err){
        console.error(err);
        res.status(500).send("Error");
    }
});

app.get("/delete1/:id", async (req, res) => {
    try{
        await axios.delete(base_url + '/rooms/' + req.params.id);
        res.redirect('/rooms');
    }catch(err){
        console.error(err);
        res.status(500).send("Error");
    }
});

//<!-----------------------people--------------------------------!>//

app.get('/people', async (req, res) => {
    try{
        const response = await axios.get(base_url + '/people');
        res.render('people', {people: response.data});
    }catch(err){
        console.error(err);
        res.status(500).send("Error");
    }
});

app.get('/person/:id', async (req, res) => {
    try{
        const response = await axios.get(base_url + '/people/' + req.params.id);
        res.render('person', {person: response.data});
    }catch(err){
        console.error(err);
        res.status(500).send("Error");
    }
});

app.get("/create2", (req, res) => {
    res.render("create2");
});

app.post("/create2", async (req, res) => {
    try{
        const data = {name: req.body.name};
        await axios.post(base_url + '/people', data);
        res.redirect('/people');
    }catch(err){
        console.error(err);
        res.status(500).send("Error");
    }
});

app.get("/update2/:id", async (req, res) => {
    try{
        const response = await axios.get(
        base_url + '/people/' + req.params.id);
        res.render("update2", {person: response.data});
    }catch(err){
        console.error(err);
        res.status(500).send("Error");
    }
});

app.post("/update2/:id", async (req, res) => {
    try{
        const data = {name: req.body.name};
        await axios.put(base_url + '/people/' + req.params.id, data);
        res.redirect('/people');
    } catch(err){
        console.error(err);
        res.status(500).send("Error");
    }
});

app.get("/delete2/:id", async (req, res) => {
    try{
        await axios.delete(base_url + '/people/' + req.params.id);
        res.redirect('/people');
    }catch(err){
        console.error(err);
        res.status(500).send("Error");
    }
});

//<!----------------------renting---------------------------------!>//

app.get('/renting', async (req, res) => {
    try{
        const response = await axios.get(base_url + '/renting');
        res.render('renting', {renting: response.data});
    }catch(err){
        console.error(err);
        res.status(500).send("Error");
    }
});

app.get('/rent/:id', async (req, res) => {
    try{
        const response = await axios.get(base_url + '/renting/' + req.params.id);
        res.render('rent', {rent: response.data});
    }catch(err){
        console.error(err);
        res.status(500).send("Error");
    }
});

app.get("/create3", (req, res) => {
    res.render("create3");
});

app.post("/create3", async (req, res) => {
    try{
        const data = {r_id: req.body.r_id, p_id: req.body.p_id};
        await axios.post(base_url + '/renting', data);
        res.redirect('/renting');
    }catch(err){
        console.error(err);
        res.status(500).send("Error");
    }
});

app.get("/update3/:id", async (req, res) => {
    try{
        const response = await axios.get(
        base_url + '/renting/' + req.params.id);
        res.render("update3", {rent: response.data});
    }catch(err){
        console.error(err);
        res.status(500).send("Error");
    }
});

app.post("/update3/:id", async (req, res) => {
    try{
        const data = {r_id: req.body.r_id, p_id: req.body.p_id};
        await axios.put(base_url + '/renting/' + req.params.id, data);
        res.redirect('/renting');
    } catch(err){
        console.error(err);
        res.status(500).send("Error");
    }
});

app.get("/delete3/:id", async (req, res) => {
    try{
        await axios.delete(base_url + '/renting/' + req.params.id);
        res.redirect('/renting');
    }catch(err){
        console.error(err);
        res.status(500).send("Error");
    }
});

//<!---------------------summary--------------------------------!>//

app.get('/summary', async (req, res) => {
    try{
        const response = await axios.get(base_url + '/summary');
        res.render('summary', {summary: response.data});
    }catch(err){
        console.error(err);
        res.status(500).send("Error");
    }
});

app.listen(4000, () => {
    console.log('Listening on port 4000');
});