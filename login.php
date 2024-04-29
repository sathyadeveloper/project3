<?php
if(!isset($_POST['submit']))
{
  echo  $username=$_POST['username'];
  echo $password=$_POST['password'];
  $con=mysqli_connect("localhost:3308","root","","user");
  $sql="SELECT*from login WHERE username='$username' AND password='$password'";
  $result=mysqli_query($con.$sql);
  $resultcheck=mysqli_num_rows($result);
  if($resultcheck>0){
    echo"login successful";
  }
  else
  {
    echo "username or password incorrect";
  }
}
?>
