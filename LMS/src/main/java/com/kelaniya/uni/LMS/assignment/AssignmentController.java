package com.kelaniya.uni.LMS.assignment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin
public class AssignmentController {
    private AssignmentRepository assignmentRepository;

    @Autowired
    public AssignmentController(AssignmentRepository assignmentRepository) {
        this.assignmentRepository = assignmentRepository;
    }

    @PostMapping ("/assignment")
        public String addAssignment(@RequestBody Assignment assignmentData){
            try {
                assignmentRepository.save(assignmentData);
                return("Successfully added to the database");
            }catch ( Exception e ){
                System.out.println(e.getMessage());
                return ("Couldn't added to the database");
            }
        }

    @GetMapping ("/assignment/{id}")
    public Assignment getAssignment(@PathVariable Integer id){
        return assignmentRepository.findById(id).get();
    }
}
