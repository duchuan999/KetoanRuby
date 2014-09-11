require 'test_helper'

class BhytsControllerTest < ActionController::TestCase
  setup do
    @bhyt = bhyts(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:bhyts)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create bhyt" do
    assert_difference('Bhyt.count') do
      post :create, bhyt: {  }
    end

    assert_redirected_to bhyt_path(assigns(:bhyt))
  end

  test "should show bhyt" do
    get :show, id: @bhyt
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @bhyt
    assert_response :success
  end

  test "should update bhyt" do
    put :update, id: @bhyt, bhyt: {  }
    assert_redirected_to bhyt_path(assigns(:bhyt))
  end

  test "should destroy bhyt" do
    assert_difference('Bhyt.count', -1) do
      delete :destroy, id: @bhyt
    end

    assert_redirected_to bhyts_path
  end
end
