package com.portfolio.backend.config;
import com.portfolio.backend.model.Link;
import com.portfolio.backend.repository.LinkRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
public class DataLoader {

    @Bean
    public CommandLineRunner initData(LinkRepository repository) {
        return args -> {
            if (repository.count() == 0) {
                repository.saveAll(Arrays.asList(
                        new Link("About Me", "#about", "FaUser"),
                        new Link("Blog", "#blog", "FaPenNib"),
                        new Link("Email", "mailto:heshan@example.com", "FaEnvelope"),
                        new Link("YouTube", "https://youtube.com", "FaYoutube"),
                        new Link("LinkedIn", "https://linkedin.com", "FaLinkedin"),
                        new Link("GitHub", "https://github.com", "FaGithub"),
                        new Link("Discord", "https://discord.com", "FaDiscord")
                ));
            }
        };
    }
}
