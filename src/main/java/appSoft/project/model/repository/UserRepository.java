package appSoft.project.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import appSoft.project.model.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	User findByEmailAndPassword(String email,String password);
	User findByEmail(String email);
	User findById(int id);
}
