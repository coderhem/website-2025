package appSoft.project.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import appSoft.project.model.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle, Integer>{
	@Query("SELECT v FROM Vehicle v WHERE v.type LIKE %?1%")
	List<Vehicle> findAll(String sdata); 
	List<Vehicle> findByType(String type);

}
