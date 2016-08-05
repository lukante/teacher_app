<?php

 // Connect to MySQL
  $mysqli = new mysqli( 'localhost', 'root', '', 'terminarz_korepetycji' );
  
  // Check our connection
  if ( $mysqli->connect_error ) {
    die( 'Connect Error: ' . $mysqli->connect_errno . ': ' . $mysqli->connect_error );
  }

  $sql = "";

  $result = $mysqli->query($sql);

/*
$jsonData = array();
while ($row = mysqli_fetch_row($result)) {
    $jsonData[] = $row;
}
echo json_encode($jsonData);

*/

// Print response from MySQL
  if (!$result ) {
    die("Error: {$mysqli->errno} : {$mysqli->error}");
  } 

/* free result set */
$result->free();

  // Close our connection
  $mysqli->close();

?>