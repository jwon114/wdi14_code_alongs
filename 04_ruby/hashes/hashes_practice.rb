# Array and Hash access
puts "A. Given the following data structure:"
a = ["Anil", "Erik", "Jonathan"]
puts "How would you return the string 'Erik?'"

puts a[1]

puts "How would you add your name to the array?"

puts a.push("James") 
# alternative a << "James"

puts "B. Given the following data structure:"
h = {0 => "Zero", 1 => "One", :two => "Two", "two" => 2}
puts "How would you return the string 'One'?"

puts h[1]

puts "How would you return the string 'Two'?"

puts h[:two]

puts "How would you return the number 2?"

puts h["two"]

puts "How would you add {3 => 'Three'} to the hash?"

puts h[3] = "Three"
puts h

puts "How would you add {:four => 4} to the hash?"

puts h[:four] = 4
puts h

puts "C. Given the following data structure:"
is = {true => "It's true!", false => "It's false"}
puts "What is the return value of is[2 + 2 == 4]?"

puts "It's true!"

puts "What is the return value of is['Erik' == 'Jonathan']?"

puts "It's false"

puts "What is the return value of is[9 > 10]?"

puts "It's false"

puts "What is the return value of is[0]?"

puts "nil"

puts "What is the return value of is['Erik']?"

puts "nil"

puts "D. Given the following data structure:"
users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}
puts "How would you access Jonathan's Twitter handle (i.e. the string 'tronathan')?"

puts users["Jonathan"][:twitter]

puts "How would you add the number 7 to Erik's favorite numbers?"

users["Erik"][:favorite_numbers].push(7)
puts users

puts "How would you add yourself to the users hash?"

users["James"] = {
  :twitter => "james",
  :favorite_numbers => [1,2,3]
}
puts users

puts "How would you return the array of Erik's favorite numbers?"

puts users["Erik"][:favorite_numbers]

puts "How would you return the smallest of Erik's favorite numbers?"

puts users["Erik"][:favorite_numbers].min

puts "How would you return an array of Anil's favorite numbers that are also even?"

users["Anil"][:favorite_numbers].each do | num |
    if num.even?
        puts num
    end
end

# alternative: 
# users["Anil"][:favorite_numbers].select do | number |
#   number.even?
# end

puts "How would you return an array of the favorite numbers common to all users?"

puts users["Jonathan"][:favorite_numbers] & users["Erik"][:favorite_numbers] & users["Anil"][:favorite_numbers]


puts "How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?"

all_favorite_numbers = users["Jonathan"][:favorite_numbers] | users["Erik"][:favorite_numbers] | users["Anil"][:favorite_numbers]
puts all_favorite_numbers.sort






