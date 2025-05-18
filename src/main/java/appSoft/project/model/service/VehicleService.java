package appSoft.project.model.service;

import java.util.List;


import appSoft.project.model.Vehicle;

public interface VehicleService {
	void addVehicle(Vehicle vehicle);
	List<Vehicle> getAllVehicle();
	void deleteVehicleById(int id);
	Vehicle getVehicleById(int id);
	void updateVehicle(Vehicle vehicle);
	List<Vehicle> vListForSearch(String sData);


}
