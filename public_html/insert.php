<html>
<body>
    <?php
        $con=mysqli_connect("localhost", "id8798701_digitalbuild","Tlpecqmfisaias21", "id8798701_digital_build_db");
        // Check connection
        if (mysqli_connect_errno()) {
                echo "Failed to connect to MySQL: " . mysqli_connect_error();
        }
        try {
            mysqli_query($con,"insert into nametable values(now(),now())");
            echo "1 record added";
        } catch (mysqli_sql_exception $e) {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
        }
        mysqli_close($con);
    ?>
    
</body>
</html>