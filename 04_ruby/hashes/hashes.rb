require 'pry'

# peer pressure from js
# keys are always symbols
song1 = {
	title: 'hello',
	artist: 'lionel richie',
	released: '1983'
}

# old syntax of a hash
song2 = {
	:title => 'hello',
	:artist =>'lionel richie',
	:released => '1983'
}

hash1 = {
	"a" => "4"
}

hash2 = {
	5 => 'five'
}


binding.pry

puts 'program paused'

