<?php

 // Connect to MySQL
  $mysqli = new mysqli( 'localhost', 'root', '2608Srusia', 'terminarz_korepetycji' );
  
  // Check our connection
  if ( $mysqli->connect_error ) {
    die( 'Connect Error: ' . $mysqli->connect_errno . ': ' . $mysqli->connect_error );
  }

  $sql = "INSERT INTO terminy (firstname,lastname,date,time,period) VALUES ( '{$mysqli->real_escape_string($_POST['firstname'])}', '{$mysqli->real_escape_string($_POST['lastname'])}', '{$mysqli->real_escape_string($_POST['date'])}', '{$mysqli->real_escape_string($_POST['time'])}', '{$mysqli->real_escape_string($_POST['period'])}' )";
       $insert = $mysqli->query($sql);


// Print response from MySQL
  if ( $insert ) {
    echo "Success! Row ID: {$mysqli->insert_id}";
  } else {
    die("Error: {$mysqli->errno} : {$mysqli->error}");
  }
  
  // Close our connection
  $mysqli->close();

?>