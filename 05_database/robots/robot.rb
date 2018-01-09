# Robot Name
# When robots come off the factory floor, they have no name.

# The first time you boot them up, a random name is generated, such as RX837 or BC811.

# In other words, if I say:

# puts "Robot 1: "
# robot1 = Robot.new
# puts robot1.name
# puts robot1.name
# puts robot1.name

# puts "Robot 2: "
# robot2 = Robot.new
# puts robot2.name
# puts robot2.name
# puts robot2.name
# then robot1 will print the same name 3 times, and robot2 will not have the same name as robot1.

# Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it gets a new name.

# if I say:

# puts "Robot 3: "
# robot3 = Robot.new
# puts robot3.name
# puts robot3.name
# puts "Resetting to factory settings."
# robot3.reset
# puts robot3.name
# puts robot3.name
# then robot3 will have the same name twice, then we'll get the reset message, then it will get a new name, and print it twice.

# All robots have a mac address. The mac address never changes, even if you reset it to factory settings.

# Extensions
# Counters
# It's important that we not overwork our robots. While resetting to factory defaults is great, the wear and tear on the robot mechanics doesn't go away. Have your robot track the total number of operations that have been performed on it.

# puts "Robot 3: "
# robot3 = Robot.new
# puts robot3.name
# puts robot3.name
# puts "Resetting to factory settings."
# robot3.reset
# puts robot3.name
# puts robot3.name
# puts robot3.instruction_count # => 5
# Robot Time
# Number of instructions is important, but so is the total age of the robot.

# puts "Robot 3: "
# robot3 = Robot.new
# puts robot3.timers # => "21 seconds since last boot, 21 seconds since creation"
# puts robot3.name
# puts "Resetting to factory settings."
# robot3.reset
# puts robot3.timers # => "8 seconds since last boot, 29 seconds since creation"
# puts robot3.name

class Robot
	def initialize
		@name = Array.new(2) { Array("A".."Z").sample }.join + Array.new(3) { Array("0".."9").sample }.join
		address = Array.new(12) { (Array("a".."f") + Array("0".."9")).sample}.each_slice(2).to_a
		@mac_address = address.map { |a,b| a+b }.join(":")
		@instruction_count = 0
		@creation_time = Time.now
		@boot_time = 0
	end

	def name
		@instruction_count = @instruction_count + 1
		return @name
	end

	def mac
		@instruction_count = @instruction_count + 1
		return @mac_address
	end

	def reset
		@name = Array.new(2) { Array("A".."Z").sample }.join + Array.new(3) { Array("0".."9").sample }.join
		@instruction_count = @instruction_count + 1
		@boot_time = Time.now
		"Resetting to factory settings"
	end

	def instruction_count
		@instruction_count
	end

	def timers
		if @boot_time > 0
			"#{(Time.now - @boot_time).round} seconds since last boot, #{(Time.now - @creation_time).round} seconds since creation"
		else
			"#{(Time.now - @creation_time).round} seconds since creation"
		end
	end
end



