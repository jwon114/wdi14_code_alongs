# given a word

# i want to count the occurence of each letter
# e.g. 'apple'

# 'a': 1
# 'p': 2
# 'l': 1
# 'e': 1

def letter_count(word)
	letter_count_histogram = {}
	word.split("").each do | letter |
		if letter_count_histogram[letter]
			letter_count_histogram[letter] += 1
		else
			letter_count_histogram[letter] = 1
		end
	end
	return letter_count_histogram
end

puts letter_count("apple")
puts letter_count("banana")