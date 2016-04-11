var assert = require('assert');
var request = require('supertest');
var app = require('../server').app;

describe('API USER', function(){
    
    var administrator;
    var token;
    
    it('should create an administrator', function(done){
        request(app)
            .post('/api/users')
            .send({
                name: 'admin',
                password: 'administrator',
                admin: true
            })
            .end(function(err, res) {
                if (err)
                    throw err;
            
                administrator = res.body;
                assert.equal(administrator.name, "admin");
                done();
            });
    });
    
    // /!\ Connexion obligatoire afin d'avoir le jeton d'authentification pour les autres requetes /!\
    it('should connect to the administrator to get token AUTH', function(done){
        request(app)
            .post('/api/login/')
            .send({
                name: 'admin',
                password: 'administrator'
            })
            .end(function(err, res) {
                if (err)
                    throw err;
            
                token = res.body.token;
                assert.equal(res.body.user.name, administrator.name);
                done();
            });
    });
    
    it('should find an administrator by id', function(done){
        request(app)
            .get('/api/users/' + administrator._id)
            .set('Authorization', token)
            .end(function(err, res) {
                if (err)
                    throw err;
            
                assert.equal(res.body.name, administrator.name);
                done();
            });
    });
    
    it('should update an administrator\'s name', function(done){
        request(app)
            .put('/api/users/' + administrator._id)
            .set('Authorization', token)
            .send({
                password: 'admin'
            })
            .end(function(err, res) {
                if (err)
                    throw err;
            
                assert.equal(res.body.password, 'admin');
                done();
            });
    });
    
    it('should delete an administrator', function(done){
        request(app)
            .delete('/api/users/' + administrator._id)
            .set('Authorization', token)
            .end(function(err, res) {
                if (err)
                    throw err;
            
                assert.equal(res.statusCode, 200);
                done();
            });
    });    
    
});