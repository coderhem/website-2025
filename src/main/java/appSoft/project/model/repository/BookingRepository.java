package appSoft.project.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import appSoft.project.model.Booking;

public interface BookingRepository extends JpaRepository<Booking, Integer> {

}
