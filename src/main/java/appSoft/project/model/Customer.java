package appSoft.project.model;

import java.time.LocalDate;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.Data;

@Data
@Entity
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String firstName;
	private String lastName;
	private String email;
	private String phone;
	@DateTimeFormat(iso = ISO.DATE)
	private LocalDate travelDate;
	private String time;
	private String pickup;
	@DateTimeFormat(iso = ISO.DATE)
	private LocalDate dropDate;
	private String dropoff;
	private double price;
	private String requests;
	@ManyToMany
	private List<Vehicle> vehicle;

}
