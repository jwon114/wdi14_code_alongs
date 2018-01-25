Project.delete_all
User.delete_all

arr1 = ['pudding', 'fruit salad', 'mistyrose']
arr2 = ['muffin', 'floss', 'fairy']

user = User.new
user.email = 'dt@ga.co'
user.password = 'pudding'
user.save

10.times do
	Project.create(
		title: "#{arr1.sample} #{arr2.sample}", 
		user_id: user.id
	)
end