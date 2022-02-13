package com.cts.om.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cts.om.model.Order;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

}
