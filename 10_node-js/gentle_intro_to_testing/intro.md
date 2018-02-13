# set the scene

- rails app
- controller
- view template

to_sentence(['ruby', 'js', 'css'])

This project uses ruby, js and css

```
class ProjectsController

	def show
		@languages = ['ruby', 'js', 'css']
	end

end

```

```
This project uses <%= @languages %>
```

1. we write test to PROVE your code does what you think it does

2. tests help define the problem we are trying to solve

3. tests help you verify that new changes or refactors don't break the rest of your code

4. test leads to better designed code