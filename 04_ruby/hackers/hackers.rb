require 'pry'
require "fileutils" # because we need a method from this library

# FiltUtils.mkdir() # this is the method we want

hackers = ['Joe Black', 'Mary Jane', 'John Smith']

hackers.each do | hacker | 
	FileUtils.mkdir(hacker.downcase.gsub(' ', '-'))
	# puts hacker.downcase.gsub(' ', '-')

end

# making folders

# binding.pry # pause your program right here

puts('end of program') # this is necessary for binding.pry to work



