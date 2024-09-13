package com.example.motivationapp.controller;

import com.example.motivationapp.model.Quote;
import com.example.motivationapp.service.QuoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/quotes")
public class QuoteController {
    @Autowired
    private QuoteService quoteService;

    @GetMapping
    public List<Quote> getQuotes() {
        return quoteService.getAllQuotes();
    }
}
