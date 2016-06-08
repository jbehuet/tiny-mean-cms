class AdminController {
	
    constructor(UserService) {
        UserService.getAll().then((res) => {
            this.users = res.data;
        })
    }

}
