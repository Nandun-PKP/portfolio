package com.portfolio.backend.controller;

import com.portfolio.backend.model.Link;
import com.portfolio.backend.repository.LinkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/links")
@CrossOrigin(origins = "*")
public class LinkController {

    private final LinkRepository linkRepository;

    @Autowired
    public LinkController(LinkRepository linkRepository) {
        this.linkRepository = linkRepository;
    }

    @GetMapping
    public List<Link> getAllLinks() {
        return linkRepository.findAll();
    }
}
