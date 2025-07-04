package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Task;
import com.example.demo.DTO.TaskDTO;
import com.example.demo.repository.TaskRepository;

@RestController
@RequestMapping("/task")
public class TaskController {

	@Autowired
	private TaskRepository taskRepository;

	@CrossOrigin
	@GetMapping
	public ResponseEntity<List<Task>> getAllTasks() {
		return ResponseEntity.ok(taskRepository.findAll());
	}

	@CrossOrigin
	@PostMapping
	public ResponseEntity<TaskDTO> addTask(@RequestBody TaskDTO taskDTO) {
		System.out.println("API EP '/task': '" + taskDTO.getTaskdescription() + "'");
		Task t = new Task();
		t.setTaskdescription(taskDTO.getTaskdescription());
		taskRepository.save(t);
		return ResponseEntity.ok().body(taskDTO);
	}

	@CrossOrigin
	@PutMapping("/{id}")
	public ResponseEntity<TaskDTO> updateTask(@PathVariable Long id, @RequestBody TaskDTO taskDTO) {
		System.out.println("API EP '/update': '" + id + "' with '" + taskDTO.getTaskdescription() + "'");
		Task t = taskRepository.findById(id)
				.orElseThrow(() -> new RuntimeException("Task not found with id: " + id));
		t.setTaskdescription(taskDTO.getTaskdescription());
		taskRepository.save(t);
		return ResponseEntity.ok().body(taskDTO);
	}

	@CrossOrigin
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> delTask(@PathVariable Long id) {
		System.out.println("API EP '/delete': '" + id + "'");
		taskRepository.deleteById(id);
		return ResponseEntity.noContent().build();
	}
}
