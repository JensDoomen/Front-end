<template>
<div class="container">
<div class="row gutters">
	<div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
		<div class="card h-100">
			<div class="card-body">
				<div class="account-settings">
					<div class="user-profile">
						<h5 class="user-name">{{name}}</h5>
						<h6 class="user-email">{{email}}</h6>
					</div>
					<div class="about">

						
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
		<div class="card h-100">
			<div class="card-body">
				<div class="row gutters">
					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<h6 class="mb-3 text-primary">Personal Details</h6>
					</div>
					<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div class="form-group">
							<label for="fullName"> {{this.name}} </label>
							<input type="text" class="form-control" id="fullName" placeholder="Enter username" v-model="newname">
						</div>
					</div>
					<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div class="form-group">
							<label for="eMail"> {{this.email}} </label>
							<input type="email" class="form-control" id="eMail" placeholder="Enter email" v-model="newemail">
						</div>
					</div>
					<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
						<div class="form-group">
							<label for="Password"> Confirm password </label>
							<input type="password" class="form-control" id="password" placeholder="Enter password" v-model="confirmpassword">
						</div>
					</div>
					
				
				</div>
				<div class="row gutters">
					<div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
						<div class="text-right">
							<button type="button" id="submit" name="submit" class="btn btn-secondary" v-on:click="cancel">
								<!-- <router-link to="/autherized" class="nav-link active"></router-link> -->
								Cancel</button>
							<!-- <button><router-link class="nav-link" to="/Inlog">Sign in</router-link></button> -->
							<button type="button" id="submit" name="submit" class="btn btn-primary" v-on:click="changeaccount">Update</button>
						
						</div>
							<button type="button" class="btn btn-danger" v-on:click="deleteaccount">Delete account</button>
							
					</div>
				</div>
			</div>
			
		</div>
	</div>
</div>
</div>
</template>

<script>
import axios from 'axios'
export default{

data(){
    return{
        users: [],
		name: "",
        email: "",
        password: "",
		userId: "",
		items: [],
		// newname: '',
		// newemail: '',
		// confirmpassword: ''
		
		

    }
},

mounted: function(){
		console.log("mounted")

		this.read();
    },
	
methods:{
cancel(){
this.$router.push("/autherized")
},
read() {
	console.log("read")
    axios.get('http://localhost:44347/Authentication/getUser',{ 
	headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')} //the token is a variable which holds the token
        }).then((response) => {
          this.name = response.data.name
          this.email = response.data.email
		  this.password = response.data.password
		  this.userId = response.data.userId
		  console.log(response)
		


      });
        
		
        

},
changeaccount(){
	// const data = {
	// 	 	// name: '',
	// 		// email: '',
	// 		// password: '',
    //         // newname: this.name,
    //         // newemail: this.email,
    //         // confirmpassword: this.password,
	// 		//userId: this.userId 
	// 		name: 'this.newname',
	// 		email: 'this.newemail',
	// 		password: "this.confirmpassword"
			
    //       }
		  console.log(this.newname)
	 //axios.put('https://localhost:44347/Authentication/changeaccount/', JSON.stringify(this.data),{
		// headers: {
        //   Authorization: 'Bearer ' + localStorage.getItem('token')},
		//    newname: this.name,
        //     newemail: this.email,
        //     confirmpassword: this.password,
		// 	userId: this.userId 
	
	// })
	// .then(() => { 
	// this.showMessage = true
	// })

	axios({
        method: 'put',
        url: 'http://localhost:44347/Authentication/changeaccount/',
		headers: {
           Authorization: 'Bearer ' + localStorage.getItem('token')
		},

        data: {
			email: this.newemail,
          	name: this.newname,
			password: this.confirmpassword
        }
      })
	  .then(() => {
		this.read();

	  })

},



  

deleteaccount(){
	// const data ={
	// 	Authorization: 

	// }
	axios.delete('http://localhost:44347/Authentication/delete', {
		headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')}
	})
	.then((response) => {
	  console.log(response)
	  localStorage.clear();
      this.$emit('clearToken');
	  this.$router.push("/Inlog");

	})


// axios.delete('https://localhost:44347/Authentication/delete',{
// 	headers: {
//           Authorization: 'Bearer ' + localStorage.getItem('token')}
// },
// data: {this.email}
		  

// })


},
	
}
}


</script>
<style>
.btn btn-secondary{
	margin-right: 10px;
	height: 25px;

}
/* .nav-link.active{
	height: 10px;
	width: 10px;
} */
</style>
