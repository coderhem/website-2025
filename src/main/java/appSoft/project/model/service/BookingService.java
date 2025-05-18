package appSoft.project.model.service;

import java.util.List;

import appSoft.project.model.Booking;

public interface BookingService {
	void addBooking(Booking booking);
	List<Booking> getAllBooking();
	void deleteBookingById(int id);
	Booking getBookingById(int id);
	void updateBooking(Booking booking);
}
