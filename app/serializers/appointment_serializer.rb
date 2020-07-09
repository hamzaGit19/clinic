class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :plan_type, :time, :comments, :user_id
end
