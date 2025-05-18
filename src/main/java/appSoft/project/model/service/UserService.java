package appSoft.project.model.service;


import appSoft.project.model.User;

public interface UserService {
	
	public void addUser(User user);
	public User loginUser(String email, String password);
	public User doesUserExist(String email);
	User getUserById(int id);
}
