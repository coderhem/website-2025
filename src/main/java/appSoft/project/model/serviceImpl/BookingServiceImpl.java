package appSoft.project.model.serviceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import appSoft.project.model.Booking;
import appSoft.project.model.repository.BookingRepository;
import appSoft.project.model.service.BookingService;
@Service
public class BookingServiceImpl implements BookingService {
	@Autowired
BookingRepository bookingRepository;
	@Override
	public void addBooking(Booking booking) {
		// TODO Auto-generated method stub
		bookingRepository.save(booking);
	}

	@Override
	public List<Booking> getAllBooking() {
		// TODO Auto-generated method stub
		return bookingRepository.findAll();
	}

	@Override
	public void deleteBookingById(int id) {
		// TODO Auto-generated method stub
		bookingRepository.deleteById(id);
	}

	@Override
	public Booking getBookingById(int id) {
		// TODO Auto-generated method stub
		return bookingRepository.findById(id).get();
	}

	@Override
	public void updateBooking(Booking booking) {
		// TODO Auto-generated method stub
		bookingRepository.save(booking);
	}

}
