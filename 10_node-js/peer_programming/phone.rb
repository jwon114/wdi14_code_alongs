require 'pry'

class Phone
	def initialize(number)
		@number = number
	end

	def number
		if !@number.scan(/\D/).empty?
			formatted_number = @number.gsub(/[^0-9]/, '')
		elsif @number[0] == '1' && @number.length == 11
			formatted_number = @number.slice(1, @number.length)
		elsif @number.length == 11 || @number.length == 9
			formatted_number = '0000000000'
		end
	end

	def area_code
		@number.slice(0, 3)
	end

	def to_s
		"(#{@number.slice(0, 3)}) #{@number.slice(3, 3)}-#{@number.slice(6, @number.length)}"
	end
end