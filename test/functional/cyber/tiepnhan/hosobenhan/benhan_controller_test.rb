require 'test_helper'

class Cyber::Tiepnhan::Hosobenhan::BenhanControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
