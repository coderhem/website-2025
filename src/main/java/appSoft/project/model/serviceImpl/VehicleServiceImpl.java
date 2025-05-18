package appSoft.project.model.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import appSoft.project.model.Vehicle;
import appSoft.project.model.repository.VehicleRepository;
import appSoft.project.model.service.VehicleService;
@Service
public class VehicleServiceImpl implements VehicleService {
	@Autowired
VehicleRepository vehicleRepository;
	@Override
	public void addVehicle(Vehicle vehicle) {
		// TODO Auto-generated method stub
		vehicleRepository.save(vehicle);
	}

	@Override
	public List<Vehicle> getAllVehicle() {
		// TODO Auto-generated method stub
		return vehicleRepository.findAll();
	}

	@Override
	public void deleteVehicleById(int id) {
		// TODO Auto-generated method stub
		vehicleRepository.deleteById(id);
	}

	@Override
	public Vehicle getVehicleById(int id) {
		// TODO Auto-generated method stub
		return vehicleRepository.findById(id).get();
	}

	@Override
	public void updateVehicle(Vehicle vehicle) {
		// TODO Auto-generated method stub
		vehicleRepository.save(vehicle);
	}
	
	@Override
	public List<Vehicle> vListForSearch(String sData) {
		// TODO Auto-generated method stub
		List<Vehicle> vList= vehicleRepository.findByType(sData);
		return vList;
	}



}
