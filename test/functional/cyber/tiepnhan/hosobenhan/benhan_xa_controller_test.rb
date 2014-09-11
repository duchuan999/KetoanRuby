require 'test_helper'

class Cyber::Tiepnhan::Hosobenhan::BenhanXaControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
  end

end
