class AddColumnsToComments < ActiveRecord::Migration[5.1]
  def change
  	add_column :comments, :user_id, :integer
  	add_column :comments, :project_id, :integer
  end
end
