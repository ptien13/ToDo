const express = require('express')
const router = express.Router()
const { getHomePage, postcreateUser, getCreatePage,
    getupdatepage, postUpdateUser, postDeleteUser, postHandlerDeleteUser } = require('../controllers/homeController')



router.get('/', getHomePage
)

router.get('/create/', getCreatePage
)
router.get('/update/:id', getupdatepage
)
// router.get('/update/:id', getupdatepage
// )

router.post('/create-user', postcreateUser
)

router.post('/update-user', postUpdateUser
)

router.post('/delete-user/:id', postDeleteUser
)


router.post('/delete-user', postHandlerDeleteUser
)
module.exports = router
