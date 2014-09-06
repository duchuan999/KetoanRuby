/**
 * Created by DELL on 09/01/2014.
 */
function jsRoar(name) {
    alert('I am ' + name + '. Hear me roar!');
}
function check(event,v_this){
    if(event.keyCode =="13")
    {
        if(v_this.value=="")
        {
            alert("Nhap ma");
            return;
        }
    }
}
