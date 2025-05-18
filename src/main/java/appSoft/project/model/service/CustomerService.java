package appSoft.project.model.service;

import java.util.List;

import appSoft.project.model.Customer;

public interface CustomerService {
	void addCustomer(Customer customer);
	List<Customer> getAllCustomer();
	void deleteCustomerById(int id);
	Customer getCustomerById(int id);
	void updateCustomer(Customer customer);
	List<Customer>getByEmail(String email);

}
