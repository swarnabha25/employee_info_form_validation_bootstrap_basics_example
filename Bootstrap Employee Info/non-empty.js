


 function validate() {
           var id1 = document.getElementById("id1");
           var name1 = document.getElementById("name1");
           var address = document.getElementById("address");
           var dob = document.getElementById("dob");
            var country = document.getElementById("country");
            var state = document.getElementById("state");
            var city = document.getElementById("city");
            var email =document.getElementById("email");
           
           
           if (id1.value == "" || name1.value == "" || address.value == ""  || email.value == "" || dob.value == "") {
                alert("All star(*) fields are mandatory");
                return false;
            }
                
            return true;
        }