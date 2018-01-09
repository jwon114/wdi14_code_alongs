require 'pry'

class Fish # always starts with a capital letter and camel case

	def initialize(new_name)
		# name = 'bob' # local variable only lives as the method is being ran
		@name = new_name # instance variable, accessible from anywhere in the class
		@health = 10
	end

	def sleep # instance method
		@health = @health + 10
	end

	def name # class attributes are private, need a method to retrieve the name
		return @name
	end

	def set_name(new_name)
		@name = new_name
	end

end

class Shark

	def initialize(new_name)
		@name = new_name
		@health = 1000
	end
end

binding.pry

puts "paused"