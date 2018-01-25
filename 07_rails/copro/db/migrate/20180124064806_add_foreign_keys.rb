class AddForeignKeys < ActiveRecord::Migration[5.1]
  def change
  	add_foreign_key :comments, :users
  	add_foreign_key :comments, :projects
  end
end
