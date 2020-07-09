class CreateAppointments < ActiveRecord::Migration
  def change
    create_table :appointments do |t|
      t.string :plan_type
      t.datetime :time
      t.string :comments

      t.timestamps null: false
    end
  end
end
