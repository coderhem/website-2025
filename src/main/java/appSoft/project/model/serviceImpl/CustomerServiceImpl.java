package appSoft.project.model.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import appSoft.project.model.Customer;
import appSoft.project.model.repository.CustomerRepository;
import appSoft.project.model.service.CustomerService;
@Service
public class CustomerServiceImpl implements CustomerService {
	@Autowired
CustomerRepository customerRepository;
	@Override
	public void addCustomer(Customer customer) {
		// TODO Auto-generated method stub
		customerRepository.save(customer);
	}

	@Override
	public List<Customer> getAllCustomer() {
		// TODO Auto-generated method stub
		return customerRepository.findAll();
	}

	@Override
	public void deleteCustomerById(int id) {
		// TODO Auto-generated method stub
		customerRepository.deleteById(id);
	}

	@Override
	public Customer getCustomerById(int id) {
		// TODO Auto-generated method stub
		return customerRepository.findById(id).get();
	}

	@Override
	public void updateCustomer(Customer customer) {
		// TODO Auto-generated method stub
		customerRepository.save(customer);
	}

	@Override
	public List<Customer> getByEmail(String email) {
		// TODO Auto-generated method stub
		return customerRepository.findByEmail(email);
	}

}
