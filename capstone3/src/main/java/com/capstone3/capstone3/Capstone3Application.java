package com.capstone3.capstone3;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Capstone3Application {

	@Value("${server.port}")
	private int portNum;

	@Value("${spring.application.name}")
	private String appName;

	public static void main(String[] args) {
		SpringApplication.run(Capstone3Application.class, args);
	}

	@Bean
	public CommandLineRunner cliRunner() {
		return args -> {
			System.out.println(appName + " running on port " + portNum);
		};
	}

}
