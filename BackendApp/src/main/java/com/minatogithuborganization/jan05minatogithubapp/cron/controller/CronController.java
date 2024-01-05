package com.minatogithuborganization.jan05minatogithubapp.cron.controller;

import com.minatogithuborganization.jan05minatogithubapp.base.controller.CronBaseController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
@RestController
@RequestMapping(path = "/rest/cronservices/", produces = "application/json")
public class CronController extends CronBaseController{	
}

