import express from 'express';
import {
    getIjazah,
    getIjazahForCombo,
    getIjazahForEdit,
    updateIjazah,
    ubahStatusIjazah,
    getIjazahByKelas
} from '../controllers/IjazahController.js';

const router = express.Router();

router.get('/ijazah/:kelas', getIjazah);
router.get('/ijazahCombo', getIjazahForCombo);
router.post('/ijazahForEdit', getIjazahForEdit);
router.put('/ijazah/:id', updateIjazah);
router.post('/ubahStatusIjazah', ubahStatusIjazah);
router.get('/getIjazahByKelas', getIjazahByKelas);


export default router;