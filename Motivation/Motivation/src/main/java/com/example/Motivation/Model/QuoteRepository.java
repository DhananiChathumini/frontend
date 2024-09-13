package com.example.Motivation.Model;

import com.example.Motivation.Model.Quote;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuoteRepository extends JpaRepository<Quote, Long>
{

}
