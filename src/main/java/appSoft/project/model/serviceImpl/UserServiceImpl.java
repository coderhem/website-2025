package appSoft.project.model.serviceImpl;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import appSoft.project.model.User;
import appSoft.project.model.repository.UserRepository;
import appSoft.project.model.service.UserService;
@Service
public class UserServiceImpl implements UserService {
	@Autowired
UserRepository userRepository;
	@Override
	public void addUser(User user) {
		// TODO Auto-generated method stub
		userRepository.save(user);
	}

	@Override
	public User loginUser(String email, String password) {
		return userRepository.findByEmailAndPassword(email,password);
	}

	@Override
	public User doesUserExist(String email) {
		return userRepository.findByEmail(email);
	}

	@Override
	public User getUserById(int id) {
		// TODO Auto-generated method stub
		return userRepository.findById(id);
	}   

}
