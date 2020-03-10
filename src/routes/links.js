const express = require('express');
const router = express.Router();
const pool = require('../database.js');

router.get('/add', (req, res) => {
    res.render('links/add');
});

router.post('/add', async(req, res) => {
    const { title, url, description } = req.body;
    const newLink = {
        title,
        url,
        descripcion: description
    };
    /** LAS VALIDACIONES */
    await pool.query('Insert into links set ?', [newLink]);
    req.flash('success', 'Link guardado correctamente !');
    res.redirect('/links'); /**Redirige al listado de Linkls */
});

/*Lista los links guardados */
router.get('/', async(req, res) => {

    const links = await pool.query('Select * from links;');
    res.render('links/list', { links }); /*Renderiza la vista y envia la data de BBDD */

});


router.get('/edit/:id', async(req, res) => {

    const { id } = req.params;

    const links = await pool.query('Select * from links where id = ?', [id]);

    res.render('links/edit', { link: links[0] });
});

router.post('/edit/:id', async(req, res) => {

    const { id } = req.params;
    const { title, url, description } = req.body;
    const linkEdit = {
        title,
        url,
        descripcion: description
    };

    /** LAS VALIDACIONES */

    await pool.query('UPDATE links set ? WHERE id = ?', [linkEdit, id]);
    req.flash('success', 'Link actualizado correctamente !');
    res.redirect('/links');

});

router.get('/delete/:id', async(req, res) => {

    const { id } = req.params;
    await pool.query('DELETE FROM links WHERE id = ?', [id]);

    req.flash('success', 'Link removido correctamente !');
    res.redirect('/links');

});

module.exports = router;